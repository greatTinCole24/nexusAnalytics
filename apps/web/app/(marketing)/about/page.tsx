const milestones = [
  {
    year: '2023',
    title: 'Founded Nexus Analytics',
    description: 'We set out to bridge esports analysts and sports operations with a shared intelligence stack.'
  },
  {
    year: '2024',
    title: 'Launched multi-sport engine',
    description: 'Adapters for Valorant, CS2, LoL, Dota, NBA, and NFL shipped with semantic parity.'
  }
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-6 py-16 text-white">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold">Built by analysts, for performance staff.</h1>
        <p className="text-white/70">
          Our founding team scaled analytics platforms for tier-one esports organizations and pro sport franchises. Nexus
          distills those learnings into a product that is easy to adopt, secure by design, and extensible via APIs.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {milestones.map((milestone) => (
          <div key={milestone.year} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-wide text-primary">{milestone.year}</p>
            <h2 className="mt-2 text-2xl font-semibold">{milestone.title}</h2>
            <p className="mt-2 text-sm text-white/70">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
