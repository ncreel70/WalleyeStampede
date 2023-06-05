import { Model } from '@nozbe/watermelondb'

export default class Tournament extends Model {
    static table = 'tournaments'
    static associations = {
        teams: { type: 'has_many', foreignKey: 'tournament_id' },
        fish: { type: 'has_many', foreignKey: 'tournament_id' }
    }
    
    @text('name') name;
    @date('start_date') start_date;
    @date('end_date') end_date;
    @Children('teams') teams;
    @Children('fish') fish;

}