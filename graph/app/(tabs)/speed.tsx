import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SpeedChartsBlock } from "../components/speedChartsBlock";
import mockedData from "../data/mockedData.json";
import { SpeedDataPoint } from "../types/types";

const emptySpeedData: SpeedDataPoint[] = mockedData.vehicleSpeedPerHour.map(
  () => ({
    label: "",
    value: 0,
  }),
);

export default function SpeedScreen() {
  const [data, setData] = useState<SpeedDataPoint[]>(emptySpeedData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(mockedData.vehicleSpeedPerHour);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const maxSpeed = Math.max(...data.map((item) => item.value));

  const averageSpeed =
    data.length > 0
      ? Math.round(
          data.reduce((total, item) => total + item.value, 0) / data.length,
        )
      : 0;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Vehicle Speed</Text>
        <Text style={styles.description}>
          Daily speed monitoring with visual charts.
        </Text>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{maxSpeed} km/h</Text>
            <Text style={styles.summaryLabel}>Max Speed</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{averageSpeed} km/h</Text>
            <Text style={styles.summaryLabel}>Average Speed</Text>
          </View>
        </View>

        <SpeedChartsBlock
          barTitle="Speed by Hour"
          lineTitle="Speed Trend"
          data={data}
        />
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

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  summaryValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },

  summaryLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
});
