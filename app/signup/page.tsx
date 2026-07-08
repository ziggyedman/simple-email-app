export default function SignupPage() {
  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 480, margin: '48px auto' }}>
        <h1>Create account</h1>
        <form action="/api/signup" method="post">
          <div><label htmlFor="name">Name</label><input id="name" name="name" required /></div>
          <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
          <div><label htmlFor="password">Password</label><input id="password" name="password" type="password" minLength={8} required /></div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </main>
  );
}
