export type MatchQuery = {
  game: string;
  from?: Date;
  to?: Date;
};

export type TeamQuery = {
  game: string;
  region?: string;
};

export type PlayerQuery = {
  game: string;
  role?: string;
};

export type StatQuery = {
  entityType: 'team' | 'player';
  metrics: string[];
  window?: '7d' | '30d' | 'season';
  filters?: Record<string, string | number>;
};

export interface IDataProvider {
  getMatches(query: MatchQuery): Promise<unknown[]>;
  getTeams(query: TeamQuery): Promise<unknown[]>;
  getPlayers(query: PlayerQuery): Promise<unknown[]>;
  getStats(query: StatQuery): Promise<Record<string, unknown>[]>;
}
