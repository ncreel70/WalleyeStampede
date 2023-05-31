require('dotenv').config({ path: '../.env' });
const {Client} = require('pg');
const {PGUSER, PGPW, PGURL, PGPORT, PGDB} = process.env
const client = new Client({
    user: PGUSER,
    password: PGPW,
    host: PGURL,
    port: PGPORT,
    database: PGDB,
    statement_timeout: 30000,
})
console.log(`connecting to PostgreSQL database at ${PGURL} port ${PGPORT}`)
client.connect()
.then(() => {
    // const createTournament = `
    // CREATE TABLE tournament (
    //   id SERIAL PRIMARY KEY,
    //   name VARCHAR(150),
    //   start_date DATE,
    //   end_date DATE
    // );
    // `
    // client.query(createTournament)

    // const createLeague = `
    //   CREATE TABLE league (
    //     id serial primary key, 
    //     name varchar(150)
    //   );`
    // client.query(createLeague)

    // const createLUUserType = `
    //   CREATE TABLE lu_userType(
    //     id serial primary key, 
    //     name varchar(150)
    //   );`
    // client.query(createLUUserType)

    // const users = `
    //   CREATE TABLE users(
    //     id serial primary key, 
    //     name varchar(150),
    //     userType int,
    //     FOREIGN KEY (userType) REFERENCES lu_userType(id)
    //   );`
    // client.query(users)

    // const team = `
    //   CREATE TABLE team(
    //     id serial primary key,
    //     name varchar(150),
    //     leagueId int,
    //     tournamentId int,
    //     FOREIGN KEY (leagueId) REFERENCES league(id),
    //     FOREIGN KEY (tournamentId) REFERENCES tournament(id)
    //   );`
    // client.query(team)

    // const userTeam = `
    //     CREATE TABLE userTeam(
    //       id serial primary key,
    //       userId int,
    //       teamId int,
    //       FOREIGN KEY (userId) REFERENCES users(id),
    //       FOREIGN KEY (teamId) REFERENCES team(id)
    //     );`
    // client.query(userTeam)
    // const luLeague = `
    //     CREATE TABLE lu_league(
    //       id serial primary key,
    //       name varchar(150)
    //     );`
    // client.query(luLeague)
    // const teamTournament = `
    //     CREATE TABLE teamTournament(
    //       id serial primary key,
    //       teamId int,
    //       teamNumber int,
    //       tournamentId int,
    //       FOREIGN KEY (teamId) REFERENCES team(id),
    //       FOREIGN KEY (tournamentId) REFERENCES tournament(id)
    //     );`
    // client.query(teamTournament)

    // const drop = `
    // DROP TABLE teamTournament;`
    // client.query(drop)

    // const fish = `
    //   CREATE TABLE fish(
    //       id serial primary key,
    //       length double precision,
    //       teamId int,
    //       tournamentid int,
    //       foreign key (teamid) references team(id),
    //       foreign key (tournamentid) references tournament(id)
    //   );`
    // client.query(fish)
    console.log('connected to database')
    // const seedTournament = `
    //     INSERT INTO tournament (name, start_date, end_date)
    //     VALUES ('Wonkas Walleye Wiggle', '2023-05-19', '2023-05-21');`
    // client.query(seedTournament)

    // const seedLeague = `
    //     INSERT INTO lu_league(name)
    //     VALUES ('Wild Walleye League')
    //     ;`
    // client.query(seedLeague)

    // const seedTeam = `
    //         INSERT INTO team (name, leagueId, tournamentId)
    //         VALUES ('Team Ramrod', 1, 1);`
    // client.query(seedTeam)

    // const seedLu_userType = `
    //         INSERT INTO lu_usertype (name)
    //         VALUES ('admin');
    //         INSERT INTO lu_usertype (name)
    //         VALUES ('official');
    //         INSERT INTO lu_usertype (name)
    //         VALUES ('captain');
    //         INSERT INTO lu_usertype (name)
    //         VALUES ('angler');`
    // client.query(seedLu_userType)

    // const seedUsers = 
    // `   INSERT INTO users(name, userType)
    //     VALUES ('Admin', 1);
    //     INSERT INTO users(name, userType)
    //     VALUES ('Litera Cola', 2);
    //     INSERT INTO users(name, userType)
    //     VALUES ('Jesse', 3);
    //     INSERT INTO users(name, userType)
    //     VALUES ('John', 4);`
    // client.query(seedUsers)
    .then((res) => 
    console.log(res))
    .catch((err) => console.log(err))
    
});
