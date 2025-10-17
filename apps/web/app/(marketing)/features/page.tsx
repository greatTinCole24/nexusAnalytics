import { Bot, Database, Shield, Sparkles } from 'lucide-react';

const pillars = [
  {
    title: 'Semantic Query Engine',
    description: 'Registry-driven metrics ensure every query is governed, explainable, and reusable.',
    icon: Database
  },
  {
    title: 'LLM Copilot with Guardrails',
    description: 'LangChain powered orchestration with pgvector grounding keeps AI responses safe and accurate.',
    icon: Bot
  },
  {
    title: 'Enterprise Security',
    description: 'Row level security, audit trails, and granular roles ship ready for regulated teams.',
    icon: Shield
  },
  {
    title: 'Insights Automation',
    description: 'Scheduled jobs surface trends, anomalies, and performance deltas automatically.',
    icon: Sparkles
  }
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 px-6 py-16 text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-semibold">Built for analytics teams that move fast.</h1>
        <p className="mx-auto max-w-2xl text-white/70">
          Nexus Analytics brings esport and sport data together with a cohesive product surface — from ingestion to AI-driven dashboards.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <pillar.icon className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold">{pillar.title}</h2>
            <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
