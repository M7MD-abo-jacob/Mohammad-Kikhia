import { getDictionary } from '@/lib/getDictionary';
import { validateInput } from '@/lib/validateInput';
import { NextRequest, NextResponse } from 'next/server';

const serviceID = process.env.serviceID;
const publicKey = process.env.publicKey;
const templateID = process.env.templateID;

export async function POST(req: NextRequest) {
  const lang = req.nextUrl.searchParams.get('lang') || 'en';
  const dictionary = await getDictionary(lang, ['home']);
  const t = dictionary.home.contact.errors;

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
    const validationError = validateInput({ name, email, subject, message });
    if (validationError) {
      return NextResponse.json(
        {
          message: t[validationError.error],
        },
        { status: 400 },
      );
    }
    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      options,
    );
    if (response?.ok) {
      return NextResponse.json({ message: t.success }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          message: t.default,
        },
        { status: 500 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: t.default,
      },
      { status: 500 },
    );
  }
}
