import { emailRegex, textRegex } from '@/data/variables';

type Params = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function validateInput({ name, email, subject, message }: Params) {
  if (!textRegex.test(name)) {
    return {
      status: 400,
      error: 'invalid_name',
      message: 'name should be at lease two words',
    };
  }
  if (!emailRegex.test(email)) {
    return {
      status: 400,
      error: 'invalid_email',
      message: 'invalid email address',
    };
  }
  if (!textRegex.test(subject)) {
    return {
      status: 400,
      error: 'invalid_subject',
      message: 'subject should be at least two words',
    };
  }
  if (!textRegex.test(message)) {
    return {
      status: 400,
      error: 'invalid_message',
      message: 'message should be at least two words',
    };
  }

  // if all are valid, return null / no errors
  return null;
}
