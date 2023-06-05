import { Model } from '@nozbe/watermelondb'

export default class Team extends Model {
    static table = 'teams'
    static associations = {
        lu_league: { type: 'belongs_to', key: 'lu_league_id' },
        tournament: { type: 'belongs_to', key: 'tournament_id' },
        user: { type: 'has_many', foreignKey: 'user_id' },
        fish: { type: 'has_many', foreignKey: 'team_id' }
    }

    @text('name') name;
    @Relation('lu_leagues', 'lu_league_id') lu_league;
    @Relation('tournaments', 'tournament_id') tournament;
    @Children('users') user;
    @Children('fish') fish;
}