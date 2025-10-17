'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Button } from '@nexus/ui';
import { Sparkles } from 'lucide-react';
import { registry } from '@nexus/core';

export function AskNexusClient() {
  const [question, setQuestion] = useState('Show Valorant team win rates by map for the past 3 months');
  const mutation = useMutation(async () => {
    const response = await fetch('/api/v1/nlquery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    if (!response.ok) {
      throw new Error('Failed to resolve query');
    }
    return response.json();
  });

  return (
    <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
      <div className="space-y-2">
        <label className="text-sm font-medium">Ask a question</label>
        <textarea
          className="min-h-[120px] w-full rounded-xl border border-white/10 bg-black/40 p-4 text-sm"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
      </div>
      <Button onClick={() => mutation.mutate()} disabled={mutation.isPending} className="inline-flex items-center gap-2">
        <Sparkles className="h-4 w-4" />
        {mutation.isPending ? 'Thinking…' : 'Ask Nexus'}
      </Button>
      {mutation.data && (
        <div className="space-y-4 rounded-xl border border-white/10 bg-black/40 p-4 text-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Intent</p>
            <p className="font-semibold text-white">{mutation.data.intent}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">QuerySpec</p>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-black/60 p-3 text-xs text-white/70">
              {JSON.stringify(mutation.data.spec, null, 2)}
            </pre>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Explanation</p>
            <p className="text-white/70">{mutation.data.explanation}</p>
          </div>
        </div>
      )}
      {!mutation.data && (
        <div className="rounded-xl border border-dashed border-white/10 bg-black/30 p-4 text-xs text-white/60">
          Supported games: {registry.games.join(', ')}
        </div>
      )}
    </div>
  );
}
