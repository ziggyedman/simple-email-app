import Link from 'next/link';
export default function LoginPage() {
  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 480, margin: '48px auto' }}>
        <h1>Login</h1>
        <form action="/api/login" method="post">
          <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
          <div><label htmlFor="password">Password</label><input id="password" name="password" type="password" minLength={8} required /></div>
          <button type="submit">Login</button>
        </form>
        <p className="small" style={{ marginTop: 12 }}><Link href="/forgot-password">Forgot your password?</Link></p>
      </div>
    </main>
  );
}
