import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { DriversInfractionsChartProps } from "../types/types";
import { HorizontalBarChart } from "./HorizontalBarChart";

export function DriversInfractionsChart({
  data,
}: DriversInfractionsChartProps) {
  return (
    <View style={styles.chartCard}>
      <Text style={styles.chartTitle}>Motoristas com mais infrações</Text>
      <HorizontalBarChart data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  chartCard: {
    gap: 16,
  },
  chartTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
  },
});
