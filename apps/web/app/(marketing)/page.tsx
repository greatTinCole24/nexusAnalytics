import Link from 'next/link';
import { ArrowRight, BarChart3, Bot, LineChart } from 'lucide-react';
import { Button } from '@nexus/ui';

const featureCards = [
  {
    title: 'Ask Nexus',
    description: 'Type a natural language question and get charts, metrics, and dashboards instantly.',
    icon: Bot
  },
  {
    title: 'Unified Sports + Esports',
    description: 'Valorant to NBA — one data model across leagues, teams, players, and viewership.',
    icon: BarChart3
  },
  {
    title: 'Live Dashboards',
    description: 'Drag, drop, and collaborate on dashboards with live filters and insights.',
    icon: LineChart
  }
];

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
      <section className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/80">
            The Intelligence Hub for Esports + Sports
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Ask your data. Build dashboards in seconds.
          </h1>
          <p className="max-w-xl text-lg text-white/70">
            Nexus Analytics combines semantic modeling, AI copilots, and beautiful dashboards so your team can focus on winning
            — not wrangling spreadsheets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/signup" className="inline-flex items-center gap-2">
                Start for free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/ask-nexus">Launch Ask Nexus</Link>
            </Button>
          </div>
          <div className="grid gap-2 text-sm text-white/60">
            <p>Trusted by analysts and coaches in Valorant, CS2, League of Legends, NBA, and beyond.</p>
            <p>No-code dashboards · Secure by default · Ready for Vercel deployment.</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <div className="absolute inset-0 animate-float bg-[radial-gradient(circle_at_top,rgba(127,90,240,0.25),transparent_60%)]" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Ask Nexus</h3>
              <span className="text-xs text-white/60">Realtime Copilot</span>
            </div>
            <div className="space-y-4 text-sm text-white/80">
              <p className="rounded-xl bg-black/40 p-4">
                “Show Valorant team win rate by map over the last 3 months and compare to NA LCS playoffs.”
              </p>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-wide text-white/50">Suggested Output</p>
                <p className="mt-2 text-white">Stacked bar chart grouped by map with monthly trend line.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {featureCards.map((feature) => (
          <div key={feature.title} className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-6">
            <feature.icon className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-sm text-white/70">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
