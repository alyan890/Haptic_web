import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyO5jUGQfTiAihEZWdBp7V4jrruJ4_Khh_7eL7T6e4kZ7htn0uFWsPwhsAbav-Iepbo/exec";

    console.log("Apps Script URL:", scriptUrl);

    // Call Google Apps Script
    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "manual",
    });

    console.log("Apps Script response status:", googleResponse.status, googleResponse.statusText);

    if (googleResponse.status >= 400 && googleResponse.status !== 302) {
      const responseText = await googleResponse.text();
      throw new Error(`Google Script returned ${googleResponse.status}: ${responseText}`);
    }

    return NextResponse.json({
      ok: true,
      message: "Success",
      upstreamStatus: googleResponse.status,
    });

  } catch (error: any) {
    console.error("Internal API Error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
