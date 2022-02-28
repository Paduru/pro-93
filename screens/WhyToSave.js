import React from "react";
import { View, StyleSheet, Text } from "react-native";

function WhyToSaveScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Why to Save the Environment</Text>
      <View>
        <Text> Information </Text>
      </View>
      <View>
        <Text> List of reasons </Text>
        <View>
          <Text> List </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default WhyToSaveScreen;
