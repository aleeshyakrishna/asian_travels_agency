import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "@/app/_config/nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <p>You have a new contact form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ""}
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      `,
    });

    return NextResponse.json({ message: "Email successfully sent!" });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
