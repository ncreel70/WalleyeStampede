import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeNavButton from "../components/home/HomeNavButton";
import * as SQLite from 'expo-sqlite';
import {checkIfExists, seedData, getTournaments, getLeagues, openDatabase} from './utils/api'
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { useRouter } from "expo-router";

const Home = () => {
  const [db, setDb] = React.useState<SQLite.WebSQLDatabase | null>(null);
 

  const router = useRouter();
    
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
  }

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
