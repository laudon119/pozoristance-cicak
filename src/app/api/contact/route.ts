import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const date = String(form.get("date") ?? "");
    const message = String(form.get("message") ?? "");
    const locale = String(form.get("locale") ?? "sr");

    await resend.emails.send({
	  from: process.env.EMAIL_FROM!,
	  to: process.env.EMAIL_TO!,
	  subject: `New booking inquiry (${locale}) from ${name}`,
	  text: `Name: ${name}\nEmail: ${email}\nDate: ${date}\nMessage:\n${message}`,
	  replyTo: email || undefined,   // ✅ correct key
	});

    return new Response(null, { status: 204 });
  } catch (e) {
    console.error(e);
    return new Response("Failed", { status: 500 });
  }
}
