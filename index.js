import "expo-router/entry";




await database.write(async () => {
    const tournament = await database.collections.get('tournaments').create(tournament => {
        tournament.name = 'My Tournament';
        tournament.start_date = new Date();
        tournament.end_date = new Date();
    });
});

const tournamentsCollection = database.collections.get('tournaments');
console.log(tournamentsCollection);

