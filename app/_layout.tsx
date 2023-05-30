import { Stack } from "expo-router";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  return (
    <NativeBaseProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#10101E",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerTitle: "Home", headerShown: false }}
        />
        <Stack.Screen name="(team)/team" options={{ headerTitle: "Team" }} />
        <Stack.Screen name="(team)/addTeam" options={{ headerTitle: "Add Team" }} />
        <Stack.Screen
          name="addTournament"
          options={{ headerTitle: "Add Tournament" }}
        />
      </Stack>
    </NativeBaseProvider>
  );
};

export default Layout;
