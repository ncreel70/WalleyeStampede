import { Model } from '@nozbe/watermelondb'

export default class LU_User_Type extends Model {
    static table = 'lu_user_types'
    static associations = {
        users: { type: 'has_many', foreignKey: 'lu_user_type_id' },
    }
    
    @text('name') name;
    @Relation('users', 'lu_user_type_id') users;
}