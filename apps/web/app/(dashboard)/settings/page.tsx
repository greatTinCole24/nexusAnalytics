export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Organization Settings</h1>
      <p className="text-white/70">Manage members, API keys, and plan limits.</p>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        Settings management will connect to Stripe and Prisma-backed membership controls.
      </div>
    </div>
  );
}
