import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default schema =  appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'tournaments',
            columns: [
                {name: 'name', type: 'string'},
                {name: 'start_date', type: 'string'},
                {name: 'end_date', type: 'string'}
            ]
        }),
        tableSchema({
            name: 'lu_leagues',
            columns: [
                {name: 'name', type: 'string'}
            ]
        }),
        tableSchema({
            name: 'users',
            columns: [
                {name: 'name', type: 'string'},
                {name: 'email', type: 'string'},
                {name: 'lu_user_type_id', type: 'string'}
            ]
        }),
        tableSchema({
            name: 'lu_user_types',
            columns: [
                {name: 'name', type: 'string'}
            ]
        }),
        tableSchema({
            name: 'teams',
            columns: [
                {name: 'name', type: 'string'},
                {name: 'lu_league_id', type: 'string'},
                {name: 'tournament_id', type: 'string'},
                {name: 'team_number', type: 'number'}
            ]
        }),
        tableSchema({
            name: 'fish',
            columns: [
                {name: 'length', type: 'number'},
                {name: 'team_id', type: 'string'},
                {name: 'tournament_id', type: 'string'}
            ]
        })
        
    ]
})