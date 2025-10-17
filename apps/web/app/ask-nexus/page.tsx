import { Metadata } from 'next';
import { Suspense } from 'react';
import { AskNexusClient } from './prompt-client';

export const metadata: Metadata = {
  title: 'Ask Nexus — Natural language analytics copilot'
};

export default function AskNexusPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-6 py-16">
      <div className="space-y-3 text-white">
        <h1 className="text-4xl font-semibold">Ask Nexus</h1>
        <p className="text-white/70">
          Ask a question about any supported esport or sport. Nexus will translate it into a governed query and return charts instantly.
        </p>
      </div>
      <Suspense fallback={<div className="text-white/60">Loading copilot…</div>}>
        <AskNexusClient />
      </Suspense>
    </div>
  );
}
