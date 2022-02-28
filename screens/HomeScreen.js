import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text> The Environment </Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Why-to-Save");
        }}
      >
        <Text> Why To Save </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("How-to-Save");
        }}
      >
        <Text> How To Save </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Events");
        }}
      >
        <Text> Events </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HomeScreen;
