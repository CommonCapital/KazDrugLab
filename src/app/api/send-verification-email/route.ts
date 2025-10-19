import { ResetPasswordTemplate } from "@/component/EmailTemplates/reset-email";
import { VerifyEmailTemplate } from "@/component/EmailTemplates/verify-email";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const {firstName, email, verificationUrl} = await request.json();
    try {
        const {data, error} = await resend.emails.send({
            from: "KazDrugLab <nursanomarov616@gmail.com>",
            to: [email],
            subject: "Reset your password",
            react: await VerifyEmailTemplate({firstName, verificationUrl})
        });

if (error) {
    return new Response(JSON.stringify({error}), {status: 500});
    }
    return Response.json({ success: true });
} catch (error) {
        return new Response(JSON.stringify({error}), {status: 500})
    }
}