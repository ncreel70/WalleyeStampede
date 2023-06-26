import "expo-router/entry";


import configureStore from "../store/configureStore";
import { AppRegistry } from "react-native";

const store = configureStore();
const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("main", () => RNRedux);