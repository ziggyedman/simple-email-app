export default function ForgotPasswordPage() {
  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 480, margin: '48px auto' }}>
        <h1>Forgot password</h1>
        <form action="/api/forgot-password" method="post">
          <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
          <button type="submit">Send reset link</button>
        </form>
      </div>
    </main>
  );
}
