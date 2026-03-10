import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RegionRadarChart } from "../components/regionRadarChart";
import mockedData from "../data/mockedData.json";

export default function RegionsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Regions</Text>

        <Text style={styles.description}>
          Distribution of fleet vehicles across operational regions.
        </Text>

        <RegionRadarChart data={mockedData.vehiclesByRegion} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },

  container: {
    padding: 20,
    gap: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },

  description: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: -10,
  },
});
