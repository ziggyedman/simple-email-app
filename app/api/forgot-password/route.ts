import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { forgotPasswordSchema } from '@/lib/validation';
import { sendResetPasswordEmail } from '@/lib/email';

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = forgotPasswordSchema.parse({ email: formData.get('email') });
  const user = await prisma.user.findUnique({ where: { email: parsed.email } });
  if (!user) return NextResponse.redirect(new URL('/login', request.url));
  const token = crypto.randomBytes(24).toString('hex');
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60);
  await prisma.passwordResetToken.create({ data: { token, userId: user.id, expiresAt } });
  const appUrl = process.env.APP_URL || 'http://localhost:3000';
  await sendResetPasswordEmail(user.email, `${appUrl}/reset-password/${token}`);
  return NextResponse.redirect(new URL('/login', request.url));
}
