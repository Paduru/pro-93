import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EventsScreen from "./screens/EventsScreen";
import HomeScreen from "./screens/HomeScreen";
import WhyToSaveScreen from "./screens/WhyToSave";
import HowToSaveScreen from "./screens/HowToSave";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Why-to-Save" component={WhyToSaveScreen} />
        <Stack.Screen name="How-to-Save" component={HowToSaveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
