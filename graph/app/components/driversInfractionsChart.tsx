import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export type DriverInfraction = {
  label: string;
  value: number;
};

type DriversInfractionsChartProps = {
  data: DriverInfraction[];
};

export function DriversInfractionsChart({
  data,
}: DriversInfractionsChartProps) {
  return (
    <View style={styles.chartCard}>
      <Text style={styles.chartTitle}>Drivers with More Infractions</Text>

      <BarChart
        data={data}
        barWidth={22}
        spacing={28}
        frontColor="#ef4444"
        isAnimated
        noOfSections={4}
        yAxisThickness={1}
        xAxisThickness={1}
        rotateLabel
        yAxisTextStyle={styles.axisText}
        xAxisLabelTextStyle={styles.axisText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chartCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    gap: 16,
    overflow: "hidden",
  },

  chartTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
  },

  axisText: {
    color: "#6b7280",
    fontSize: 11,
  },
});
