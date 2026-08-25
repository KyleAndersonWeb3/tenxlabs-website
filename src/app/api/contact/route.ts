import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20),
});

const AC_API_URL = "https://kyleandersonweb3.api-us1.com";
const AC_API_KEY = process.env.AC_API_KEY ?? "04528a2185b48606339a64ebffe3f78a17fc035c7624c84bc564bca678d28e6ede5b5998";

async function addToActiveCampaign(data: {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
}) {
  const [firstName, ...rest] = data.name.trim().split(" ");
  const lastName = rest.join(" ") || "";

  // Upsert contact
  const contactRes = await fetch(`${AC_API_URL}/api/3/contact/sync`, {
    method: "POST",
    headers: {
      "Api-Token": AC_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contact: {
        email: data.email,
        firstName,
        lastName,
        fieldValues: [
          ...(data.company ? [{ field: "COMPANY", value: data.company }] : []),
          ...(data.budget ? [{ field: "BUDGET", value: data.budget }] : []),
        ],
      },
    }),
  });

  if (!contactRes.ok) {
    const err = await contactRes.text();
    console.error("AC contact sync error:", err);
    return;
  }

  const contactData = await contactRes.json();
  const contactId = contactData?.contact?.id;
  if (!contactId) return;

  // Add to list 8 (TenXLabs - Main List)
  await fetch(`${AC_API_URL}/api/3/contactLists`, {
    method: "POST",
    headers: {
      "Api-Token": AC_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contactList: { list: "8", contact: contactId, status: "1" },
    }),
  });

  // Apply tag 22 (TenXLabs Lead)
  await fetch(`${AC_API_URL}/api/3/contactTags`, {
    method: "POST",
    headers: {
      "Api-Token": AC_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contactTag: { contact: contactId, tag: "22" },
    }),
  });

  // Add a note with the message + budget
  await fetch(`${AC_API_URL}/api/3/notes`, {
    method: "POST",
    headers: {
      "Api-Token": AC_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      note: {
        note: `Contact form submission from tenxlabs.com\n\nCompany: ${data.company ?? "N/A"}\nBudget: ${data.budget ?? "N/A"}\n\nMessage:\n${data.message}`,
        relid: contactId,
        reltype: "Subscriber",
      },
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Fire-and-forget AC integration (don't block response on it)
    addToActiveCampaign(data).catch((e) =>
      console.error("AC integration error:", e)
    );

    console.log("Contact form submission:", { email: data.email, name: data.name });

    // Send email notification to Kyle
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "TenXLabs Contact <noreply@tenxlabs.io>",
        to: "Kyle@tenxlabs.io",
        replyTo: data.email,
        subject: `New Lead: ${data.name}${data.company ? ` — ${data.company}` : ""} [${data.budget ?? "No budget"}]`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#222">
            <h2 style="color:#0057ff">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-weight:600;width:130px">Name</td><td>${data.name}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600">Email</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:600">Company</td><td>${data.company ?? "—"}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600">Budget</td><td>${data.budget ?? "—"}</td></tr>
            </table>
            <hr style="margin:20px 0;border:none;border-top:1px solid #eee"/>
            <h3 style="margin-bottom:8px">Message</h3>
            <p style="white-space:pre-wrap;color:#444">${data.message}</p>
            <hr style="margin:20px 0;border:none;border-top:1px solid #eee"/>
            <p style="font-size:12px;color:#999">Submitted via tenxlabs.io/contact — Reply directly to this email to respond to ${data.name}.</p>
          </div>
        `,
      }).catch((e) => console.error("Resend error:", e));
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: (error as z.ZodError).issues },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
