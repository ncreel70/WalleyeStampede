import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeNavButton from "../components/home/HomeNavButton";
import * as SQLite from 'expo-sqlite';
import checkIfExists from './utils/api'
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import pathToDatabaseFile from '../assets/stampede.db';

const Home = () => {
  useEffect(() => {
    async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
      if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
      }
      await FileSystem.downloadAsync(
        Asset.fromModule(pathToDatabaseFile).uri,
        FileSystem.documentDirectory + 'SQLite/stampede.db'
      );
      return SQLite.openDatabase('stampede.db');
    }

    openDatabase(pathToDatabaseFile)
      .then((db) => {
        // Use the opened database here
        console.log("Database opened:", db);
      })
      .catch((error) => {
        console.error("Failed to open the database:", error);
      });
  }, []);

  const router = {
    push: (route: string) => {
      console.log("Pushing to route:", route);
    },
  };
  return (
    <SafeAreaView style={styles.container}>
      <HomeNavButton
        title="Tournament"
        route={() => router.push("tournament")}
      />
      <HomeNavButton title="Team" route={() => router.push("team")} />
      <HomeNavButton
        title="Add Tournament"
        route={() => router.push("addTournament")}
      />
      <HomeNavButton title="Add Team" route={() => router.push("addTeam")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  homeButton: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
  },
});

export default Home;
