import { Suspense } from 'react';
import { DashboardList } from '../components/dashboard-list';

export default function DashboardsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Dashboards</h1>
        <p className="text-white/70">Manage and explore analytics workspaces for your organization.</p>
      </div>
      <Suspense fallback={<div className="text-white/60">Loading dashboards…</div>}>
        <DashboardList />
      </Suspense>
    </div>
  );
}
