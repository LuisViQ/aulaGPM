import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadarChart } from "react-native-gifted-charts";

export type RegionData = {
  label: string;
  value: number;
};

type RegionRadarChartProps = {
  data: RegionData[];
};

export function RegionRadarChart({ data }: RegionRadarChartProps) {
  const values = data.map((item) => item.value);
  const labels = data.map((item) => item.label);

  return (
    <View style={styles.chartCard}>
      <Text style={styles.chartTitle}>Vehicles by Region</Text>

      <RadarChart data={values} labels={labels} />
    </View>
  );
}

const styles = StyleSheet.create({
  chartCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    gap: 16,
  },

  chartTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1f2937",
  },
});
