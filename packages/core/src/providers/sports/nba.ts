import { IDataProvider, MatchQuery, PlayerQuery, StatQuery, TeamQuery } from '../types';

const teams = [
  { id: 'nba-1', name: 'Seattle Meteors', conference: 'West' },
  { id: 'nba-2', name: 'Brooklyn Guardians', conference: 'East' }
];

const players = [
  { id: 'nba-player-1', name: 'Devon Miles', position: 'PG', teamId: 'nba-1' },
  { id: 'nba-player-2', name: 'Aiden Fox', position: 'SF', teamId: 'nba-2' }
];

const games = [
  {
    id: 'nba-match-1',
    game: 'NBA',
    venue: 'Seattle Arena',
    match_date: new Date().toISOString(),
    winningTeam: 'Seattle Meteors',
    losingTeam: 'Brooklyn Guardians'
  }
];

export class NbaProvider implements IDataProvider {
  async getMatches(query: MatchQuery) {
    return games.filter((match) => match.game === query.game);
  }

  async getTeams(query: TeamQuery) {
    return teams.filter((team) => team.conference === query.region || !query.region);
  }

  async getPlayers(query: PlayerQuery) {
    return players.filter((player) => player.position === query.role || !query.role);
  }

  async getStats(query: StatQuery) {
    return [
      {
        entity: query.entityType === 'team' ? 'Seattle Meteors' : 'Devon Miles',
        efficiency: 1.18,
        win_rate: 0.58,
        pace: 98.6
      }
    ];
  }
}
