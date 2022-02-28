import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HowToSaveScreen(props) {
  return (
    <View style={styles.container}>
      <Text> How to Save the Environment </Text>
      <View>
        <Text> Information </Text>
      </View>
      <View>
        <Text> List of Ideas </Text>
        <View>
          <Text> Don't litter! Pick up any trash you see </Text>
          <Text>Recycle! Put your waste in the appropriate recycling bin</Text>
          <Text>
            Conserve eletricity! Use eletricity sparingly and when it is
            necessary
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HowToSaveScreen;
