import { NextResponse } from 'next/server';

const serviceID = process.env.serviceID;
const publicKey = process.env.publicKey;
const templateID = process.env.templateID;

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  const params = {
    user_id: publicKey,
    service_id: serviceID,
    template_id: templateID,
    template_params: {
      name,
      email,
      subject,
      message,
    },
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(params),
  };

  try {
    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      options,
    );
    if (response?.ok) {
      console.log('SUCCESSSSSSSSSSS!');
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 },
      );
    } else {
      console.log('ERRROOOORRRRR!', response);
      return NextResponse.json(
        { error: 'An error occurred while sending email' },
        { status: 500 },
      );
    }
  } catch (error) {
    console.log('FAILED... ', error);
    return NextResponse.json(
      { error: 'An error occurred while sending email' },
      { status: 500 },
    );
  }
}
