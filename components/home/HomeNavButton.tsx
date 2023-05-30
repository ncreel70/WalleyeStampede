import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const HomeNavButton = ({ title, route }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.homeButton} onPress={route}>
        <Text>Tournament</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  homeButton: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
  },
});

export default HomeNavButton;
