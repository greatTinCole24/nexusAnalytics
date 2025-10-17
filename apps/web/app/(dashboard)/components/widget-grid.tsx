'use client';

import { useMemo } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';

export type Widget = {
  id: string;
  title: string;
  viz: 'bar' | 'line' | 'table' | 'kpi';
  spec: Record<string, unknown>;
};

type WidgetGridProps = {
  widgets: Widget[];
};

const mockData = [
  { label: 'Map A', value: 0.64 },
  { label: 'Map B', value: 0.58 },
  { label: 'Map C', value: 0.61 }
];

export function WidgetGrid({ widgets }: WidgetGridProps) {
  const cards = useMemo(
    () =>
      widgets.map((widget) => (
        <div key={widget.id} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div>
            <h3 className="text-lg font-semibold text-white">{widget.title}</h3>
            <p className="text-xs uppercase tracking-wide text-white/50">{widget.viz.toUpperCase()}</p>
          </div>
          {widget.viz === 'bar' ? (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData}>
                  <XAxis dataKey="label" stroke="#C8C9F0" />
                  <YAxis stroke="#C8C9F0" tickFormatter={(value) => `${Math.round(Number(value) * 100)}%`} />
                  <Tooltip formatter={(value: number) => `${Math.round(Number(value) * 100)}%`} />
                  <Bar dataKey="value" fill="#7F5AF0" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : widget.viz === 'line' ? (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <XAxis dataKey="label" stroke="#C8C9F0" />
                  <YAxis stroke="#C8C9F0" tickFormatter={(value) => `${Math.round(Number(value) * 100)}%`} />
                  <Tooltip formatter={(value: number) => `${Math.round(Number(value) * 100)}%`} />
                  <Line type="monotone" dataKey="value" stroke="#7F5AF0" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-white/10 bg-black/30 p-4 text-sm text-white/60">
              Visualization type {widget.viz} will render soon.
            </div>
          )}
        </div>
      )),
    [widgets]
  );

  return <div className="grid gap-6 md:grid-cols-2">{cards}</div>;
}
