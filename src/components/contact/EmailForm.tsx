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
import { useNotification } from '../layout/NotificationsProvider';
import axios, { AxiosError } from 'axios';

type Props = { t: Trans; lang: string };

export default function EmailForm({ t, lang }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const addNotification = useNotification();

  const validationError = validateInput({
    name: formData.name.trim(),
    subject: formData.subject.trim(),
    email: formData.email.trim(),
    message: formData.message.trim(),
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (validationError) {
        throw validationError;
      }
      const response = await axios.post(`/api/sendEmail?lang=${lang}`, {
        name: formData.name.trim(),
        subject: formData.subject.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });
      if (response?.status === 200) {
        addNotification({
          message: t.success,
          status: 'success',
        });
      } else {
        throw response;
      }
    } catch (error: any) {
      const errorMessage = error?.error
        ? t.errors[error.error]
        : error?.response?.data?.message || t.errors.default;
      addNotification({
        message: errorMessage,
        status: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  }
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
              formData.name.trim().length > 0 &&
              !textRegex.test(formData.name.trim())
                ? 'invalid'
                : ''
            } ${formData.name.trim().length > 0 ? '' : 'empty'}`}
            dir={
              formData.name.trim() ? getTextDirection(formData.name.trim()) : ''
            }
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
              formData.email.trim().length > 0 &&
              !emailRegex.test(formData.email.trim())
                ? 'invalid'
                : ''
            } ${formData.email.trim().length > 0 ? '' : 'empty'}`}
            dir={formData.email.trim() ? 'ltr' : ''}
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
              formData.subject.trim().length > 0 &&
              !textRegex.test(formData.subject.trim())
                ? 'invalid'
                : ''
            } ${formData.subject.trim().length > 0 ? '' : 'empty'}`}
            dir={
              formData.subject.trim()
                ? getTextDirection(formData.subject.trim())
                : ''
            }
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
            className={`${
              formData.message.trim().length > 0 &&
              !textRegex.test(formData.message.trim())
                ? 'invalid'
                : ''
            } ${formData.message.trim().length > 0 ? '' : 'empty'}`}
            dir={
              formData.message.trim()
                ? getTextDirection(formData.message.trim())
                : ''
            }
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
          data-aos-offset="0"
          type="submit"
          disabled={validationError !== null || isLoading}>
          {t.submit} <FaPaperPlane />
        </button>
      </div>
    </form>
  );
}
