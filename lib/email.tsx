import * as React from 'react';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import ResetPasswordEmail from '@/emails/templates/ResetPasswordEmail';
import LoginAlertEmail from '@/emails/templates/LoginAlertEmail';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function sendEmail(to: string, subject: string, element: React.ReactElement) {
  if (!resend) {
    console.warn('RESEND_API_KEY not configured. Skipping email send.');
    return { skipped: true };
  }
  const html = await render(element);
  return resend.emails.send({ from: process.env.EMAIL_FROM || 'Acme <onboarding@example.com>', to, subject, html });
}

export async function sendResetPasswordEmail(to: string, resetUrl: string) {
  return sendEmail(to, 'Reset your password', <ResetPasswordEmail resetUrl={resetUrl} />);
}

export async function sendLoginAlertEmail(to: string, timestamp: string) {
  return sendEmail(to, 'New login to your account', <LoginAlertEmail timestamp={timestamp} />);
}
