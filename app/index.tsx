import { SplashScreen, Link, Stack, useRouter } from "expo-router";
import {useState, useEffect} from "react";
import { View, Text, ScrollView, SafeAreaView, Button } from "react-native";
import {COLORS, icons, images, SIZES, FONT} from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";



export default function App() {
  const [isReady, setReady] = useState(false);
  const router = useRouter();
  

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options = {{
            headerStyle: {
              backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
            ),
            headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
            ),
          }}

        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ 
            flex: 1, 
            padding: SIZES.medium
            }}>
              <Welcome
              />

              <Popularjobs />
              <Nearbyjobs />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}