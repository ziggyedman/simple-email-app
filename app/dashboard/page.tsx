import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth';

export default async function DashboardPage() {
  const user = await getCurrentUser();
  return (
    <main className="container grid">
      <div className="card row-between">
        <div>
          <span className="pill">Dashboard</span>
          <h1>{user ? `Welcome, ${user.name}` : 'You are not logged in'}</h1>
          <p className="small">This is the protected area where your app features would live.</p>
        </div>
        <form action="/api/logout" method="post"><button type="submit">Logout</button></form>
      </div>
      <div className="grid grid-2">
        <div className="card"><h3>Auth</h3><p className="small">Server-side sessions stored in the database.</p></div>
        <div className="card"><h3>Email</h3><p className="small">Use Resend + React Email for transactional and product emails.</p></div>
        <div className="card"><h3>Settings</h3><p className="small">Opt users in or out of newsletters and blog posts.</p></div>
        <div className="card"><h3>Next step</h3><p className="small">Add blog publishing or an admin-triggered newsletter sender.</p></div>
      </div>
      <Link href="/settings" className="small">Go to settings</Link>
    </main>
  );
}
