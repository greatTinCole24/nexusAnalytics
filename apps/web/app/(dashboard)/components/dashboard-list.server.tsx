import Link from 'next/link';

async function getDashboards() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/v1/dashboards`, { cache: 'no-store' });
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data.dashboards ?? [];
}

export async function DashboardCards() {
  const dashboards = await getDashboards();
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {dashboards.map((dashboard: any) => (
        <Link
          key={dashboard.id}
          href={\`/dashboards/${dashboard.id}\`}
          className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-primary/60"
        >
          <h3 className="text-xl font-semibold text-white">{dashboard.name}</h3>
          <p className="mt-2 text-sm text-white/70">{dashboard.widgets.length} widgets</p>
        </Link>
      ))}
      {dashboards.length === 0 && (
        <div className="rounded-2xl border border-dashed border-white/10 bg-black/30 p-6 text-sm text-white/60">
          No dashboards yet — ask Nexus to create your first insight.
        </div>
      )}
    </div>
  );
}
