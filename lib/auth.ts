import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { cookies } from 'next/headers';
import { prisma } from './db';

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function createSession(userId: string) {
  const token = crypto.randomBytes(24).toString('hex');
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
  await prisma.session.create({ data: { token, userId, expiresAt } });
  const cookieStore = await cookies();
  cookieStore.set('session_token', token, { httpOnly: true, sameSite: 'lax', secure: false, path: '/', expires: expiresAt });
}

export async function clearSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;
  if (token) await prisma.session.deleteMany({ where: { token } });
  cookieStore.delete('session_token');
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;
  if (!token) return null;
  const session = await prisma.session.findUnique({ where: { token }, include: { user: { include: { settings: true } } } });
  if (!session || session.expiresAt < new Date()) return null;
  return session.user;
}
