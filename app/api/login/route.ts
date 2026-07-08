import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSession, verifyPassword } from '@/lib/auth';
import { loginSchema } from '@/lib/validation';
import { sendLoginAlertEmail } from '@/lib/email';

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = loginSchema.parse({ email: formData.get('email'), password: formData.get('password') });
  const user = await prisma.user.findUnique({ where: { email: parsed.email }, include: { settings: true } });
  if (!user) return NextResponse.redirect(new URL('/login', request.url));
  const valid = await verifyPassword(parsed.password, user.passwordHash);
  if (!valid) return NextResponse.redirect(new URL('/login', request.url));
  await createSession(user.id);
  if (user.settings?.loginAlertsEnabled) await sendLoginAlertEmail(user.email, new Date().toISOString());
  return NextResponse.redirect(new URL('/dashboard', request.url));
}
