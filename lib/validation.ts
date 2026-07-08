import { z } from 'zod';
export const signupSchema = z.object({ email: z.string().email(), password: z.string().min(8), name: z.string().min(2) });
export const loginSchema = z.object({ email: z.string().email(), password: z.string().min(8) });
export const forgotPasswordSchema = z.object({ email: z.string().email() });
export const resetPasswordSchema = z.object({ token: z.string().min(10), password: z.string().min(8) });
export const settingsSchema = z.object({ newsletterOptIn: z.boolean(), blogPostsOptIn: z.boolean(), loginAlertsEnabled: z.boolean() });
