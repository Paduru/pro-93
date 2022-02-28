import React from "react";
import { View, StyleSheet, Text } from "react-native";

function EventsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Events</Text>
      <View>
        <Text> Information </Text>
      </View>
      <View>
        <Text> List of Events </Text>
        <Text> Missions, charities, plans, etc. </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default EventsScreen;
