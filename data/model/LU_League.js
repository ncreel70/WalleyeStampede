import { Model } from '@nozbe/watermelondb'

export default class LU_Leagues extends Model {
    static table = 'lu_leagues'
    static associations = {
        teams: { type: 'has_many', foreignKey: 'lu_league_id' },
    }
    
    @text('name') name;
    @Children('teams') teams;
}