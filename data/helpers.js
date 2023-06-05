import {database} from './database'


export async function seedTournaments() {
    await database.action(async () => {
        const newTournament = await database.collections.get('tournaments').create((tournament) => {
            tournament.name = 'Tournament 1'
            tournament.start_date = '2021-01-01'
            tournament.end_date = '2021-01-02'
        })
    }
    )
    return await getTournaments()
}


export async function getTournaments() {
    const tournamentsCollection = database.collections.get<TournamentData>('tournaments')
    const tournaments = await tournamentsCollection.query().fetch()
    return tournaments
}

