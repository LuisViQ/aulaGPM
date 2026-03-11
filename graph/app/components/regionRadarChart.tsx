import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadarChart } from "react-native-gifted-charts";

import { RegionRadarChartProps } from "../types/types";

export function RegionRadarChart({ data }: RegionRadarChartProps) {
  const radarData = data.map((item) => item.value);
  const labels = data.map((item) => item.label);

  return (
    <View style={styles.chartCard}>
      <Text style={styles.chartTitle}>Veículos por Região</Text>

      <RadarChart
        data={radarData}
        labels={labels}
        isAnimated
        showDots
        dotColor="#6366f1"
        dotSize={8}
        dotBorderColor="#4338ca"
        dotBorderWidth={2}
        labelColor="#475569"
        labelFontSize={12}
        areaColor={["#818cf880", "#a5b4fc80"]}
        areaStrokeColor="#4338ca"
        areaStrokeWidth={2}
        backgroundColor="#f8fafc"
      />
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
