import { NextRequest, NextResponse } from "next/server";
import getClientPromise from "@/lib/mongodb";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; purpose?: string; message?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const purpose = (body.purpose ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || name.length > 120) {
    return NextResponse.json(
      { error: "Please provide a valid name." },
      { status: 400 }
    );
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 5000 characters." },
      { status: 400 }
    );
  }

  try {
    // 1. Save to MongoDB (Optional - won't fail the whole request if DB isn't setup)
    try {
      const clientPromise = getClientPromise();
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB || "portfolio");

      await db.collection("contact_submissions").insertOne({
        name,
        email,
        purpose,
        message,
        createdAt: new Date(),
      });
    } catch (dbErr) {
      console.error("MongoDB save failed (skipping):", dbErr);
    }

    // 2. Setup Nodemailer & Send Emails
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailToAdmin = {
        from: `"Portfolio Alerts" <${process.env.EMAIL_USER}>`,
        to: "princeasodariya13@gmail.com",
        subject: `New Lead: ${name} - ${purpose || "Portfolio Inquiry"}`,
        html: `
          <div style="font-family: Helvetica, Arial, sans-serif; color: #111827;">
            <h2 style="color: #111827;">New Portfolio Contact Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Purpose:</strong> ${purpose || "Not Specified"}</p>
            <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;"/>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #eaeaea;">${message}</p>
          </div>
        `,
      };

      const mailToUser = {
        from: `"Prince Asodariya" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Message Received — Prince Asodariya",
        html: `
          <div style="background-color: #fafafa; padding: 40px 20px; font-family: 'Inter', Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 16px; overflow: hidden; padding: 40px; color: #111827; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <div style="margin-bottom: 30px;">
                <h1 style="font-size: 24px; font-weight: 800; margin: 0; color: #111827; letter-spacing: -0.5px;">Message Received.</h1>
                <p style="color: #6b7280; font-size: 14px; margin-top: 6px;">I'll be in touch with you shortly.</p>
              </div>
              
              <div style="padding: 28px; background-color: #f9fafb; border: 1px solid #f3f4f6; border-radius: 12px; margin-bottom: 30px;">
                <p style="margin: 0 0 12px 0; font-size: 15px; color: #374151; font-weight: 600;">Hi ${name},</p>
                <p style="margin: 0; font-size: 14px; color: #4b5563; line-height: 1.7;">
                  Thank you for reaching out${purpose ? ` regarding <strong>${purpose}</strong>` : ""}. I have successfully received your message and will review it as soon as possible. I typically respond within 24 hours to all serious technical opportunities.
                </p>
              </div>
              
              <div style="border-top: 1px solid #eaeaea; padding-top: 24px; font-size: 13px; color: #9ca3af; line-height: 1.6;">
                <p style="margin: 0; font-weight: 600; color: #111827;">Prince Asodariya</p>
                <p style="margin: 2px 0 0 0;">Software Engineer</p>
                <p style="margin: 16px 0 0 0; font-size: 11px;">This is an automated acknowledgment. Please do not reply directly to this email.</p>
              </div>
            </div>
          </div>
        `,
      };

      try {
        await Promise.all([
          transporter.sendMail(mailToAdmin),
          transporter.sendMail(mailToUser),
        ]);
      } catch (emailErr: any) {
        console.error("Nodemailer failed to send email:", emailErr);
        return NextResponse.json(
          { error: "Email delivery failed. Please check your Gmail App Password.", details: emailErr.message },
          { status: 500 }
        );
      }
    } else {
      console.warn("Nodemailer not configured. Missing EMAIL_USER or EMAIL_PASS in .env");
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err: any) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later.", details: err?.message },
      { status: 500 }
    );
  }
}
