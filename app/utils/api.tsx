export async function checkIfExists(db: SQLite.WebSQLDatabase): Promise<void> {
    const query = `
      CREATE TABLE IF NOT EXISTS tournament (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS lu_league (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS team (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        tournamentId INTEGER NOT NULL,
        leagueId INTEGER NOT NULL,
        FOREIGN KEY (tournamentId) REFERENCES tournament (id),
        FOREIGN KEY (leagueId) REFERENCES league (id)
      );
      CREATE TABLE IF NOT EXISTS lu_userType (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        userType INTEGER,
        FOREIGN KEY (userType) REFERENCES lu_userType (id)
      );
      CREATE TABLE IF NOT EXISTS userTeam (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        teamId INTEGER NOT NULL,
        FOREIGN KEY (userId) REFERENCES users (id),
        FOREIGN KEY (teamId) REFERENCES team (id)
      );
      CREATE TABLE IF NOT EXISTS teamTournament (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        teamId INTEGER NOT NULL,
        teamNumber INTEGER NOT NULL,
        tournamentId INTEGER NOT NULL,
        FOREIGN KEY (teamId) REFERENCES team (id),
        FOREIGN KEY (tournamentId) REFERENCES tournament (id)
      );
      CREATE TABLE IF NOT EXISTS fish (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        length DOUBLE NOT NULL,
        teamId INTEGER NOT NULL,
        tournamentId INTEGER NOT NULL,
        FOREIGN KEY (teamId) REFERENCES team (id),
        FOREIGN KEY (tournamentId) REFERENCES tournament (id)
      );
    `;
  
    return new Promise<void>((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          query,
          [],
          () => {
            console.log("Tables created or already exist");
            resolve();
          },
          (_, error) => {
            console.error("Failed to create tables:", error);
            reject(error);
          }
        );
      });
    });
  }

  export async function seedData(db: SQLite.WebSQLDatabase): Promise<void> {
    const seedTournament = {
      name: "Test Tournament",
      start_date: "2021-01-01",
      end_date: "2021-01-02"
    };
  
    const seedLeague = {
      name: "Test League"
    };
  
    const seedTeam = {
      name: "Test Team",
      tournamentId: 1,
      leagueId: 1
    };
  
    const seedUserType = {
      name: "Test User Type"
    };
  
    const seedUser = {
      name: "Test User",
      userType: 1
    };
  
    const seedUserTeam = {
      userId: 1,
      teamId: 1
    };
  
    const seedTeamTournament = {
      teamId: 1,
      teamNumber: 1,
      tournamentId: 1
    };
  
    const seedFish = {
      length: 1.0,
      teamId: 1,
      tournamentId: 1
    };
  
    const query = `
      INSERT INTO tournament (name, start_date, end_date)
        VALUES ('${seedTournament.name}', '${seedTournament.start_date}', '${seedTournament.end_date}');
      INSERT INTO lu_league (name)
        VALUES ('${seedLeague.name}');
      INSERT INTO team (name, tournamentId, leagueId)
        VALUES ('${seedTeam.name}', ${seedTeam.tournamentId}, ${seedTeam.leagueId});
      INSERT INTO lu_userType (name)
        VALUES ('${seedUserType.name}');
      INSERT INTO users (name, userType)
        VALUES ('${seedUser.name}', ${seedUser.userType});
      INSERT INTO userTeam (userId, teamId)
        VALUES (${seedUserTeam.userId}, ${seedUserTeam.teamId});
      INSERT INTO teamTournament (teamId, teamNumber, tournamentId)
        VALUES (${seedTeamTournament.teamId}, ${seedTeamTournament.teamNumber}, ${seedTeamTournament.tournamentId});
      INSERT INTO fish (length, teamId, tournamentId)
        VALUES (${seedFish.length}, ${seedFish.teamId}, ${seedFish.tournamentId});
    `;
  
    return new Promise<void>((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          query,
          [],
          () => {
            console.log("Seed completed");
            resolve();
          },
          (_, error) => {
            console.error("Failed to seed the data:", error);
            reject(error);
          }
        );
      });
    });
  }
  

export async function getTournaments(db) {
    const query = "SELECT * FROM tournament;";
    db.transaction((transaction) => {
      transaction.executeSql(
        query,
        [],
        (_, { rows }) => {
          console.log("Query completed");
          console.log(rows);
        },
        (_, error) => {
          console.error("Query error:", error);
        }
      );
    });
  }

    export async function getLeagues(db) {
    const query = "SELECT * FROM lu_league;";
    db.transaction((transaction) => {
        transaction.executeSql(
            query,
            [],
            (_, { rows }) => {
            console.log("Query completed");
            console.log(rows);
            },
            (_, error) => {
            console.error("Query error:", error);
            }
        );
        }
    );
    }
    
  