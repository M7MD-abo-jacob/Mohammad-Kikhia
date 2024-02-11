'use client';

import { Trans } from '../../../types';
import React, { useRef, useState } from 'react';
import {
  FaCommentDots,
  FaEnvelope,
  FaInfo,
  FaPaperPlane,
  FaUser,
} from 'react-icons/fa6';
import { validateInput } from '@/lib/validateInput';
import { getTextDirection } from '@/lib/getTextDirection';
import { emailRegex, textRegex } from '@/data/variables';

type Props = { t: Trans };

export default function EmailForm({ t }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const validationError = validateInput(formData);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (validationError) {
        throw validationError;
      }
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          subject: formData.subject,
          email: formData.email,
          message: formData.message,
        }),
      });
      console.log('response', response);
    } catch (error) {
      console.log('error', error);
      alert(t.errors.default);
      // alert(t.errors[error.error] || t.errors.default);
    } finally {
      setIsLoading(false);
    }
  }
  // TODO: shit typescript
  return (
    <form
      data-aos="fade-in-right"
      id="contact-form"
      onSubmit={handleSubmit}
      ref={formRef}>
      <div className="form-group">
        <div className="field">
          <input
            className={`${
              formData.name.length > 0 && !textRegex.test(formData.name)
                ? 'invalid'
                : ''
            } ${formData.name.length > 0 ? '' : 'empty'}`}
            dir={formData.name ? getTextDirection(formData.name) : ''}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            id="form-name"
            name="name"
            required
          />
          <FaUser />
          <label htmlFor="form-name">{t.name}</label>
        </div>
        <div className="field">
          <input
            className={`${
              formData.email.length > 0 && !emailRegex.test(formData.email)
                ? 'invalid'
                : ''
            } ${formData.email.length > 0 ? '' : 'empty'}`}
            dir={formData.email ? 'ltr' : ''}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            name="email"
            id="form-email"
            required
          />
          <FaEnvelope />
          <label htmlFor="form-email">{t.email}</label>
        </div>
        <div className="field">
          <input
            className={`${
              formData.subject.length > 0 && !textRegex.test(formData.subject)
                ? 'invalid'
                : ''
            } ${formData.subject.length > 0 ? '' : 'empty'}`}
            dir={formData.subject ? getTextDirection(formData.subject) : ''}
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            type="text"
            name="subject"
            id="form-subject"
            required
          />
          <FaInfo />
          <label htmlFor="form-subject">{t.subject}</label>
        </div>
        <div className="message">
          <textarea
            // TODO: validation on backend
            className={`${
              formData.message.length > 0 && !textRegex.test(formData.message)
                ? 'invalid'
                : ''
            } ${formData.message.length > 0 ? '' : 'empty'}`}
            dir={formData.message ? getTextDirection(formData.message) : ''}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            name="message"
            id="form-message"
            required
          />
          <FaCommentDots />
          <label htmlFor="form-message">{t.message}</label>
        </div>
      </div>
      <div className="button-area">
        <button
          data-aos="fade-up"
          type="submit"
          disabled={validationError !== null || isLoading}>
          {t.submit} <FaPaperPlane />
        </button>
      </div>
    </form>
  );
}
