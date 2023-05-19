import { useRouter } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

const Home = () => {
  const router = useRouter();
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
};

export default Home;
