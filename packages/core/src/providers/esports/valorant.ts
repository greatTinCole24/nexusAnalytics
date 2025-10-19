import { IDataProvider, MatchQuery, PlayerQuery, StatQuery, TeamQuery } from '../types';

const sampleTeams = [
  { id: 'val-1', name: 'Nexus Valorant', region: 'NA' },
  { id: 'val-2', name: 'Phantom Five', region: 'EU' }
];

const samplePlayers = [
  { id: 'player-1', name: 'Iris', role: 'Initiator', teamId: 'val-1' },
  { id: 'player-2', name: 'Kiro', role: 'Duelist', teamId: 'val-2' }
];

const sampleMatches = [
  {
    id: 'match-1',
    game: 'Valorant',
    map: 'Ascent',
    match_date: new Date().toISOString(),
    winningTeam: 'Nexus Valorant',
    losingTeam: 'Phantom Five'
  }
];

export class ValorantProvider implements IDataProvider {
  async getMatches(query: MatchQuery) {
    return sampleMatches.filter((match) => match.game === query.game);
  }

  async getTeams(query: TeamQuery) {
    return sampleTeams.filter((team) => team.region === query.region || !query.region);
  }

  async getPlayers(query: PlayerQuery) {
    return samplePlayers.filter((player) => player.role === query.role || !query.role);
  }

  async getStats(query: StatQuery) {
    return [
      {
        entity: query.entityType === 'team' ? 'Nexus Valorant' : 'Iris',
        win_rate: 0.64,
        kda: 1.22,
        matches: 48
      }
    ];
  }
}
