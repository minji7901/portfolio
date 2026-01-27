import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, contact, message } = await req.json();

    if (!name || !contact || !message) {
      return Response.json(
        { error: "필수 값이 누락되었습니다." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM, // 예: "Portfolio <yourid@domain.com>"
      to: "kimem469@naver.com",
      subject: `[Portfolio Contact] ${name}님의 문의`,
      text: `이름: ${name}\n연락처/이메일: ${contact}\n\n메시지:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (e) {
    return Response.json(
      { error: "메일 전송 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
