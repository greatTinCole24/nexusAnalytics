import { NextResponse } from 'next/server';

const demoDashboards = [
  {
    id: 'demo-dashboard',
    name: 'Esports Overview',
    widgets: [
      {
        id: 'demo-widget',
        title: 'Valorant Win Rate (90d)',
        viz: 'bar',
        spec: {
          measures: ['win_rate'],
          dimensions: ['map'],
          filters: [{ dimension: 'game', operator: '=', value: 'Valorant' }],
          timegrain: 'month'
        }
      }
    ]
  }
];

export async function GET() {
  return NextResponse.json({ dashboards: demoDashboards });
}
