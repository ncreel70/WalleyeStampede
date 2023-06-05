import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { openDatabase, addNewTournament } from "../../utils/api";
import { TournamentData } from "../../utils/types";
import * as SQLite from 'expo-sqlite';

const AddTournament: React.FC = () => {
  useEffect(() => {
    openDatabase(require('../assets/SQLite/stampede.db'))
      .then((db: SQLite.WebSQLDatabase) => {
        console.log("Database opened:", db);
        const newTournament: TournamentData = {
          name: "wild willy's walleye wiggles",
          start_date: "2021-06-01",
          end_date: "2021-06-02",
        };
        addNewTournament(db, newTournament)
          .then((result) => {
            console.log("Tournament added:", result);
          })
          .catch((error) => {
            console.error("Failed to add tournament:", error);
          });
      })
      .catch((error) => {
        console.error("Failed to open the database:", error);
      });
  }, []);

  return (
    <View>
      <Text>Add Tournament</Text>
    </View>
  );
};

export default AddTournament;
