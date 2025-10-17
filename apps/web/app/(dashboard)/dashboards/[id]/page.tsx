import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { WidgetGrid } from '../../components/widget-grid';

async function getDashboard(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/v1/dashboards`, { cache: 'no-store' });
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return (data.dashboards ?? []).find((dashboard: any) => dashboard.id === id) ?? null;
}

export default async function DashboardDetail({ params }: { params: { id: string } }) {
  const dashboard = await getDashboard(params.id);
  if (!dashboard) {
    notFound();
  }
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">{dashboard.name}</h1>
        <p className="text-white/70">Interactive widgets generated from governed QuerySpecs.</p>
      </div>
      <Suspense fallback={<div className="text-white/60">Rendering widgets…</div>}>
        <WidgetGrid widgets={dashboard.widgets} />
      </Suspense>
    </div>
  );
}
