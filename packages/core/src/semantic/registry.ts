import { QuerySpec } from '../types';

type MetricDefinition = {
  name: string;
  label: string;
  description: string;
  sql: string;
  type: 'number' | 'percent' | 'duration';
};

type DimensionDefinition = {
  name: string;
  label: string;
  description: string;
  sql: string;
  type: 'string' | 'number' | 'date';
};

type SemanticRegistry = {
  games: string[];
  metrics: Record<string, MetricDefinition>;
  dimensions: Record<string, DimensionDefinition>;
  defaults: {
    describe: QuerySpec;
    trend: QuerySpec;
  };
};

export const registry: SemanticRegistry = {
  games: ['Valorant', 'CS2', 'League of Legends', 'Dota 2', 'NBA', 'NFL', 'EPL'],
  metrics: {
    win_rate: {
      name: 'win_rate',
      label: 'Win Rate',
      description: 'Percentage of matches won over total matches played.',
      sql: 'SUM(win) / NULLIF(SUM(win) + SUM(loss), 0)',
      type: 'percent'
    },
    kda: {
      name: 'kda',
      label: 'KDA',
      description: 'Kill + Assist to Death ratio for a player.',
      sql: 'AVG(kills + assists) / NULLIF(AVG(deaths), 0)',
      type: 'number'
    },
    elo: {
      name: 'elo',
      label: 'ELO Rating',
      description: 'ELO rating that measures relative strength over time.',
      sql: 'AVG(elo)',
      type: 'number'
    },
    efficiency: {
      name: 'efficiency',
      label: 'Efficiency',
      description: 'Composite efficiency metric for sports players.',
      sql: 'AVG(efficiency)',
      type: 'number'
    }
  },
  dimensions: {
    game: {
      name: 'game',
      label: 'Game',
      description: 'The title of the esport or sport.',
      sql: 'game',
      type: 'string'
    },
    team: {
      name: 'team',
      label: 'Team',
      description: 'Team identifier associated with the stat.',
      sql: 'team_name',
      type: 'string'
    },
    player: {
      name: 'player',
      label: 'Player',
      description: 'Player associated with the stat row.',
      sql: 'player_name',
      type: 'string'
    },
    map: {
      name: 'map',
      label: 'Map / Arena',
      description: 'Map, arena, or venue of the match.',
      sql: 'map',
      type: 'string'
    },
    match_date: {
      name: 'match_date',
      label: 'Match Date',
      description: 'Date when the match occurred.',
      sql: 'match_date',
      type: 'date'
    },
    league: {
      name: 'league',
      label: 'League',
      description: 'Competitive league identifier.',
      sql: 'league',
      type: 'string'
    }
  },
  defaults: {
    describe: {
      measures: ['win_rate'],
      dimensions: ['game'],
      filters: [],
      viz: 'bar'
    },
    trend: {
      measures: ['elo'],
      dimensions: ['match_date'],
      filters: [],
      timegrain: 'month',
      viz: 'line'
    }
  }
};

export const registryKeys = Object.freeze({
  metrics: Object.keys(registry.metrics),
  dimensions: Object.keys(registry.dimensions)
});
