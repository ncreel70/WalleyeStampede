import { Model, Relation } from '@nozbe/watermelondb'

export default class User extends Model {
    static table = 'users'
    static associations = {
        lu_user: { type: 'belongs_to', key: 'lu_user_type_id' },
        team: { type: 'belongs_to', key: 'team_id' }
    }

    @text('name') name;
    @text('email') email;
    @Children ('lu_user_types') lu_user;
    @Relation('teams', 'team_id') team;
}