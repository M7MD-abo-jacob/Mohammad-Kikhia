import { emailRegex, textRegex } from '@/data/variables';

export function validateInput(state: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!state.name || !textRegex.test(state.name)) {
    // return 'Please enter a valid full name.';
    return {
      status: 400,
      error: 'invalid_name',
      message: 'name should be at lease two words',
    };
  }
  if (!state.subject || !textRegex.test(state.subject)) {
    return {
      status: 400,
      error: 'invalid_subject',
      message: 'subject should be at least two words',
    };
  }
  if (!state.message || !textRegex.test(state.message)) {
    return {
      status: 400,
      error: 'invalid_message',
      message: 'message should be at least two words',
    };
  }

  if (!state.email || !emailRegex.test(state.email)) {
    return {
      status: 400,
      error: 'invalid_email',
      message: 'invalid email address',
    };
  }

  // if all are valid, return null / no errors
  return null;
}
