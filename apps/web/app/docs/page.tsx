const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/nlquery',
    description: 'Translate a natural language question into a QuerySpec and SQL preview.',
    sample: `curl -X POST https://nexus.gg/api/v1/nlquery -d '{"question":"Show Valorant win rates by map"}'`
  },
  {
    method: 'GET',
    path: '/api/v1/dashboards',
    description: 'Fetch dashboards with associated widget QuerySpecs.',
    sample: 'curl https://nexus.gg/api/v1/dashboards'
  }
];

export default function DocsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-10 px-6 py-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold">API Reference</h1>
        <p className="text-white/70">
          Integrate Nexus Analytics into your own workflows using REST APIs and API keys scoped per organization.
        </p>
      </div>
      <div className="grid gap-6">
        {endpoints.map((endpoint) => (
          <article key={endpoint.path} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-semibold text-primary">{endpoint.method}</span>
            <h2 className="text-xl font-semibold">{endpoint.path}</h2>
            <p className="text-sm text-white/70">{endpoint.description}</p>
            <pre className="overflow-x-auto rounded-lg bg-black/50 p-3 text-xs text-white/70">{endpoint.sample}</pre>
          </article>
        ))}
      </div>
    </div>
  );
}
