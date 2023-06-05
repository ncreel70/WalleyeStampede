import { Model } from '@nozbe/watermelondb'

export default class Fish extends Model {
    static table = 'fish'
    static associations = {
        tournament: { type: 'belongs_to', key: 'tournament_id' },
        team: { type: 'belongs_to', key: 'team_id' }
    }

    @text('length') length
    @Relation('tournaments', 'tournament_id') tournament
    @Relation('teams', 'team_id') team
    
}