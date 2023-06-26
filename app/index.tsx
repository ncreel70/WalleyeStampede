import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeNavButton from "../components/home/HomeNavButton";




const Home = () => {
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
