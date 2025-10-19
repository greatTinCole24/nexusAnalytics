export type ComparisonOperator = '=' | '!=' | '>' | '>=' | '<' | '<=' | 'in' | 'between';

export type Filter = {
  dimension: string;
  operator: ComparisonOperator;
  value: string | number | Array<string | number>;
};

export type QuerySpec = {
  title?: string;
  description?: string;
  measures: string[];
  dimensions: string[];
  filters?: Filter[];
  timegrain?: 'day' | 'week' | 'month' | 'season';
  viz?: 'line' | 'bar' | 'area' | 'scatter' | 'table' | 'kpi';
  limit?: number;
  orderBy?: Array<{ field: string; direction: 'asc' | 'desc' }>;
};

export type QueryIntent = 'describe' | 'compare' | 'trend' | 'rank' | 'forecast';

export type ResolvedQuery = {
  intent: QueryIntent;
  spec: QuerySpec;
  sql: string;
  explanation: string;
};
