import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, subject, message } = body;

    if (!firstname || !lastname || !email || !message || !subject) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const service_id = process.env.EMAILJS_SERVICE_ID;
    const template_id = process.env.EMAILJS_TEMPLATE_ID;
    const user_id = process.env.EMAILJS_PUBLIC_KEY;
    const accessToken = process.env.EMAILJS_PRIVATE_KEY;

    if (!service_id || !template_id || !user_id) {
      console.error(
        "Missing EmailJS environment variables. Please check your .env.local file."
      );
      return NextResponse.json(
        {
          error:
            "Server configuration error: Missing EmailJS environment variables. Did you restart the server?",
        },
        { status: 500 }
      );
    }

    const data = {
      service_id,
      template_id,
      user_id,
      accessToken,
      template_params: {
        firstname,
        lastname,
        email,
        subject,
        message,
      },
    };

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS Error:", errorText);
      return NextResponse.json(
        { error: `EmailJS Error: ${errorText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
