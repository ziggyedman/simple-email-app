import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSession, hashPassword } from '@/lib/auth';
import { signupSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = signupSchema.parse({ name: formData.get('name'), email: formData.get('email'), password: formData.get('password') });
  const existing = await prisma.user.findUnique({ where: { email: parsed.email } });
  if (existing) return NextResponse.redirect(new URL('/login', request.url));
  const user = await prisma.user.create({
    data: {
      name: parsed.name,
      email: parsed.email,
      passwordHash: await hashPassword(parsed.password),
      settings: { create: { newsletterOptIn: true, blogPostsOptIn: true, loginAlertsEnabled: true } },
    },
  });
  await createSession(user.id);
  return NextResponse.redirect(new URL('/dashboard', request.url));
}
