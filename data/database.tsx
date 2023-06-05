import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import Tournament from './model/Tournament'
import schema from './schema'

const adapter = new SQLiteAdapter({
    schema,
})

export const database = new Database({
    adapter,
    modelClasses: [Tournament]
})