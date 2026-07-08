# Simple Email App

A small Next.js starter app that demonstrates:

- Signup / login / logout
- Settings page with opt-in toggles
- Login alert emails
- Password reset emails
- React Email + Resend structure
- Prisma schema for users, settings, sessions, and reset tokens

## Stack

- Next.js App Router
- TypeScript
- Prisma + PostgreSQL
- Resend
- React Email
- bcryptjs
- zod

## Getting started

1. Copy `.env.example` to `.env`
2. Fill in `DATABASE_URL`, `RESEND_API_KEY`, `EMAIL_FROM`, and `APP_URL`
3. Install dependencies with `npm install`
4. Generate Prisma client with `npx prisma generate`
5. Push schema to your database with `npx prisma db push`
6. Start the app with `npm run dev`
