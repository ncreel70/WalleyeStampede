import { useRouter } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import HomeNavButton from "../components/home/HomeNavButton";
import { Select } from "native-base";

const Home = () => {
  const router = useRouter();
  const pressFunctions = {
    goToAbout: () => router.push("/about"),
    goToAddTournament: () => router.push("/add-tournament"),
    goToAddTeam: () => router.push("/add-team"),
  }

  const tournaments = {
    "1": {
      name: "Walley Stampede",
      location: "Lake Minnetonka",
      date: "2021-06-12",
    },
    "2": {
      name: "Walley Whirl",
      location: "GLendo Reservoir",
      date: "2021-06-19",
    }

  }
  const handleChange = (value) => {
    console.log(value);
  }
  
  return (
    <NativeBaseProvider>
      <Box>Walley Stampede</Box>
      <View style={style.container}>
        <HomeNavButton title="Add a Tournament" pressFunction={pressFunctions.goToAddTournament}/>
        <Select placeholder="Select a Tournament" onValueChange={handleChange(1)} selectedValue={1}>
                  {Object.keys(tournaments).map((key) => {
            return <Select.Item label={tournaments[key].name} value={key} key={key}/>
          })}
        </Select>
        <HomeNavButton title="Add a Team" pressFunction={pressFunctions.goToAddTeam}/>
      </View>
      <View style={style.container}>
        <HomeNavButton title="About" pressFunction={pressFunctions.goToAbout}/>
        <HomeNavButton title="Settings" pressFunction={pressFunctions.goToAbout}/>
      </View>
    </NativeBaseProvider>
  );
};

const style = {
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#fff",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
}

export default Home;
