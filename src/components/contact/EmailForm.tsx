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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const validationError = validateInput(formData);
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
      alert(t.errors[error.error] || t.errors.default);
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
            dir={formData.name ? getTextDirection(formData.name) : ''}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            name="user_name"
            placeholder={t.name}
            required
          />
          <FaUser />
        </div>
        <div className="field">
          <input
            dir={formData.email ? 'ltr' : ''}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="text"
            name="user_email"
            placeholder={t.email}
            required
          />
          <FaEnvelope />
        </div>
        <div className="field">
          <input
            dir={formData.subject ? getTextDirection(formData.subject) : ''}
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            type="text"
            name="subject"
            placeholder={t.subject}
          />
          <FaInfo />
        </div>
        <div className="message">
          <textarea
            dir={formData.message ? getTextDirection(formData.message) : ''}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder={t.message}
            name="message"
            required></textarea>
          <FaCommentDots />
        </div>
      </div>
      <div className="button-area">
        <button data-aos="fade-up" type="submit" disabled={isLoading}>
          {t.submit} <FaPaperPlane />
        </button>
      </div>
    </form>
  );
}
