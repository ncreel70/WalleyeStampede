import React from "react";
import { TouchableOpacity, View, Text } from "react-native";


const HomeNavButton = ({ title, pressFunction }) => {
  return(
  <View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} onPress ={pressFunction} >{title}</Text>
    </TouchableOpacity>
  </View>
  )
};

const styles = {
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    width: "100%"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
};


export default HomeNavButton;
