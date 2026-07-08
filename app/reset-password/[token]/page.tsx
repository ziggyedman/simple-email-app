export default async function ResetPasswordPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 480, margin: '48px auto' }}>
        <h1>Reset password</h1>
        <form action="/api/reset-password" method="post">
          <input type="hidden" name="token" value={token} />
          <div><label htmlFor="password">New password</label><input id="password" name="password" type="password" minLength={8} required /></div>
          <button type="submit">Update password</button>
        </form>
      </div>
    </main>
  );
}
