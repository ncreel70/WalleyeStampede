import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getTournaments, openDatabase } from "../utils/api";
import { TournamentData } from "../types";

const Tournament: React.FC = () => {
  const [tournaments, setTournaments] = useState<TournamentData[]>([]);

  useEffect(() => {
    openDatabase(require('../assets/SQLite/stampede.db'))
      .then((db) => {
        getTournaments(db)
          .then((result: TournamentData[]) => {
            setTournaments(result);
          })
          .catch((error) => {
            console.error("Failed to fetch tournaments:", error);
          });
        console.log("Database opened:", db);
      })
      .catch((error) => {
        console.error("Failed to open the database:", error);
      });
  }, []);

  return (
    <View>
      <Text>Tournament</Text>
      {tournaments.map((tournament) => (
        <Text key={tournament.id}>{tournament.name}</Text>
      ))}
    </View>
  );
};

export default Tournament;
