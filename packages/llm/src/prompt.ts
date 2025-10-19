import { QueryIntent } from '@nexus/core';

type PromptContext = {
  question: string;
  schemaOverview: string;
  examples?: string;
};

export const buildNlPrompt = ({ question, schemaOverview, examples }: PromptContext) => `
You are Nexus Analytics, a data assistant that translates natural language questions into a strict JSON DSL called QuerySpec.
Use the provided schema overview and examples to select the right metrics and dimensions. Always respond with valid JSON.

<Schema>
${schemaOverview}
</Schema>

${examples ? `<Examples>\n${examples}\n</Examples>` : ''}

<UserQuestion>${question}</UserQuestion>

Respond with a JSON object containing:
- intent: one of describe | compare | trend | rank | forecast
- spec: the QuerySpec JSON with measures, dimensions, optional filters, timegrain, and viz
- explanation: short natural language summary of the query plan.
`;

export const classifyIntent = (message: string): QueryIntent => {
  const normalized = message.toLowerCase();
  if (normalized.includes('compare') || normalized.includes('vs')) {
    return 'compare';
  }
  if (normalized.includes('trend') || normalized.includes('over time')) {
    return 'trend';
  }
  if (normalized.includes('top') || normalized.includes('rank')) {
    return 'rank';
  }
  if (normalized.includes('forecast') || normalized.includes('predict')) {
    return 'forecast';
  }
  return 'describe';
};
