import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { settingsSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.redirect(new URL('/login', request.url));
  const formData = await request.formData();
  const parsed = settingsSchema.parse({
    newsletterOptIn: formData.get('newsletterOptIn') === 'on',
    blogPostsOptIn: formData.get('blogPostsOptIn') === 'on',
    loginAlertsEnabled: formData.get('loginAlertsEnabled') === 'on',
  });
  await prisma.userSettings.upsert({ where: { userId: user.id }, update: parsed, create: { userId: user.id, ...parsed } });
  return NextResponse.redirect(new URL('/settings', request.url));
}
