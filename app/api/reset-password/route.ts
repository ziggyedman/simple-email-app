import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { hashPassword } from '@/lib/auth';
import { resetPasswordSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = resetPasswordSchema.parse({ token: formData.get('token'), password: formData.get('password') });
  const resetToken = await prisma.passwordResetToken.findUnique({ where: { token: parsed.token } });
  if (!resetToken || resetToken.usedAt || resetToken.expiresAt < new Date()) return NextResponse.redirect(new URL('/forgot-password', request.url));
  await prisma.user.update({ where: { id: resetToken.userId }, data: { passwordHash: await hashPassword(parsed.password) } });
  await prisma.passwordResetToken.update({ where: { token: parsed.token }, data: { usedAt: new Date() } });
  return NextResponse.redirect(new URL('/login', request.url));
}
