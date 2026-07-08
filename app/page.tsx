import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container grid" style={{ paddingTop: 56 }}>
      <section className="hero card">
        <span className="pill">Next.js + Prisma + Resend</span>
        <h1>Simple Email App starter</h1>
        <p>A small app that shows how to structure auth, settings, login alerts, password resets, and newsletter preferences in one clean codebase.</p>
        <div className="nav">
          <Link href="/signup">Create account</Link>
          <Link href="/login">Login</Link>
          <Link href="/settings">Settings</Link>
        </div>
      </section>
      <section className="grid grid-2">
        <div className="card"><h3>What it includes</h3><p className="small">Signup, login, logout, settings persistence, password reset flow, and transactional email examples.</p></div>
        <div className="card"><h3>How to think about it</h3><p className="small">UI gathers intent, the server applies rules, the database stores truth, and email becomes an output channel.</p></div>
      </section>
    </main>
  );
}
