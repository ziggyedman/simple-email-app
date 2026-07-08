import { getCurrentUser } from '@/lib/auth';

export default async function SettingsPage() {
  const user = await getCurrentUser();
  const settings = user?.settings;
  if (!user) {
    return <main className="container"><div className="card" style={{ maxWidth: 560, margin: '48px auto' }}><h1>Settings</h1><p className="small">Please log in first.</p></div></main>;
  }
  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 680, margin: '32px auto' }}>
        <h1>Email settings</h1>
        <p className="small">Choose which emails the product should send you.</p>
        <form action="/api/settings" method="post">
          <label className="row"><input className="checkbox" type="checkbox" name="newsletterOptIn" defaultChecked={settings?.newsletterOptIn ?? true} /> Monthly newsletter</label>
          <label className="row"><input className="checkbox" type="checkbox" name="blogPostsOptIn" defaultChecked={settings?.blogPostsOptIn ?? true} /> Blog post emails</label>
          <label className="row"><input className="checkbox" type="checkbox" name="loginAlertsEnabled" defaultChecked={settings?.loginAlertsEnabled ?? true} /> Login alert emails</label>
          <button type="submit">Save settings</button>
        </form>
      </div>
    </main>
  );
}
