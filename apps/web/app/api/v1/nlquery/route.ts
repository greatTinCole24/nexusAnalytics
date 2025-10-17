import { NextResponse } from 'next/server';
import { classifyIntent, registry } from '@nexus/core';
import { buildNlPrompt } from '@nexus/llm';

export async function POST(request: Request) {
  const body = await request.json();
  const question: string = body.question ?? '';

  if (!question || question.length < 3) {
    return NextResponse.json({ error: 'Question is required' }, { status: 400 });
  }

  const intent = classifyIntent(question);
  const spec = registry.defaults[intent] ?? registry.defaults.describe;

  const prompt = buildNlPrompt({
    question,
    schemaOverview: `Metrics: ${Object.keys(registry.metrics).join(', ')}\nDimensions: ${Object.keys(registry.dimensions).join(', ')}`
  });

  return NextResponse.json({
    intent,
    spec,
    explanation: 'Stubbed response — connect to LangChain/OpenAI to enable live NL translation.',
    prompt
  });
}
