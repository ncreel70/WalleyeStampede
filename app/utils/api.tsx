export default async function checkIfExists() {
    const query = 
    ` CREATE TABLE IF NOT EXISTS tournament (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS lu_league (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS team (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        tournamentId INTEGER NOT NULL,
        leagueId INTEGER NOT NULL,
        FOREIGN KEY (tournamentId) REFERENCES tournament (id),
        FOREIGN KEY (leagueId) REFERENCES league (id));
    CREATE TABLE IF NOT EXISTS lu_userType (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        userType INTEGER,
        FOREIGN KEY (userType) REFERENCES lu_userType (id));
    CREATE TABLE IF NOT EXISTS userTeam (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        teamId INTEGER NOT NULL,
        FOREIGN KEY (userId) REFERENCES users (id),
        FOREIGN KEY (teamId) REFERENCES team (id));
    CREATE TABLE IF NOT EXISTS teamTournament (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        teamId INTEGER NOT NULL,
        teamNumber INTEGER NOT NULL,
        tournamentId INTEGER NOT NULL,
        FOREIGN KEY (teamId) REFERENCES team (id),
        FOREIGN KEY (tournamentId) REFERENCES tournament (id));
    CREATE TABLE IF NOT EXISTS fish (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        length DOUBLE NOT NULL,
        teamId INTEGER NOT NULL,
        tournamentId INTEGER NOT NULL,
        FOREIGN KEY (teamId) REFERENCES team (id),
        FOREIGN KEY (tournamentId) REFERENCES tournament (id));
    `;
    
}