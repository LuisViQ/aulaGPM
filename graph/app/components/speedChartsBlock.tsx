import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarChart, CurveType, LineChart } from "react-native-gifted-charts";
import { LinearGradient, Stop } from "react-native-svg";

import { SpeedChartsBlockProps } from "../types/types";

export function SpeedChartsBlock({
  barTitle,
  lineTitle,
  data,
}: SpeedChartsBlockProps) {
  return (
    <>
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>{lineTitle}</Text>
        <LineChart
          data={data}
          height={220}
          adjustToWidth
          initialSpacing={10}
          endSpacing={10}
          curveType={CurveType.QUADRATIC}
          thickness={4}
          animateOnDataChange
          areaChart
          color="#38bdf8"
          dataPointsColor="#38bdf8"
          dataPointsRadius={5}
          yAxisColor="#94a3b8"
          xAxisColor="#94a3b8"
          showVerticalLines
          hideDataPoints
          verticalLinesColor="#e2e8f0"
          yAxisTextStyle={styles.axisText}
          xAxisLabelTextStyle={styles.axisText}
          noOfSections={4}
          focusedDataPointColor="#fb7185"
          focusedDataPointRadius={6}
          areaGradientId="speedGradient"
          showScrollIndicator
          areaGradientComponent={() => (
            <LinearGradient id="speedGradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#fb7185" stopOpacity="0.55" />
              <Stop offset="0.28" stopColor="#a78bfa" stopOpacity="0.45" />
              <Stop offset="0.58" stopColor="#38bdf8" stopOpacity="0.32" />
              <Stop offset="1" stopColor="#2563eb" stopOpacity="0.14" />
            </LinearGradient>
          )}
        />
      </View>

      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>{barTitle}</Text>
        <BarChart
          data={data}
          height={220}
          barWidth={14}
          spacing={12}
          barBorderRadius={4}
          frontColor="#3b82f6"
          noOfSections={4}
          yAxisThickness={1}
          xAxisThickness={1}
          yAxisTextStyle={styles.axisText}
          xAxisLabelTextStyle={styles.axisText}
          hideRules={false}
          isAnimated
        />
      </View>
    </>
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
