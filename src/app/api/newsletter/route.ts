import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = schema.parse(body);

    // TODO: Integrate with your newsletter service (Mailchimp, ConvertKit, Resend Audiences, etc.)
    // Example with Mailchimp:
    // await fetch(`https://us1.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    //   method: "POST",
    //   headers: { Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`, "Content-Type": "application/json" },
    //   body: JSON.stringify({ email_address: email, status: "subscribed" }),
    // });

    console.log("Newsletter subscription:", email);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
