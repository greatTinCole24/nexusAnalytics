import { NextResponse } from 'next/server';
import { registry } from '@nexus/core';

export async function POST(request: Request) {
  const body = await request.json();
  const measures = body.measures ?? registry.defaults.describe.measures;
  const dimensions = body.dimensions ?? registry.defaults.describe.dimensions;

  return NextResponse.json({
    spec: {
      measures,
      dimensions,
      filters: body.filters ?? [],
      timegrain: body.timegrain ?? 'month'
    },
    rows: [
      { label: 'Sample A', value: 0.61 },
      { label: 'Sample B', value: 0.57 }
    ]
  });
}
