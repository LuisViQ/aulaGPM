import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

import { ChartBlockProps } from "../types/types";

export function PieChartBlock({
  data,
  donut = false,
  isThreeD = false,
}: ChartBlockProps) {
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <>
      <PieChart
        data={data.map(({ value, color }) => ({ value, color }))}
        radius={120}
        innerRadius={65}
        isAnimated
        donut={donut}
        isThreeD={isThreeD}
        showText={false}
        innerCircleBorderWidth={6}
        innerCircleBorderColor="#f1f5f9"
        shadowColor="#94a3b8"
        strokeWidth={5}
        centerLabelComponent={() => (
          <View style={styles.centerLabelContainer}>
            <Text style={styles.centerLabelValue}>{totalValue}</Text>
            <Text style={styles.centerLabelText}>Total</Text>
          </View>
        )}
      />

      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={styles.legendInfo}>
              <View
                style={[styles.legendColor, { backgroundColor: item.color }]}
              />
              <MaterialCommunityIcons
                name={item.icon}
                size={18}
                color="#475569"
              />
              <Text style={styles.legendText}>{item.label}</Text>
            </View>
            <Text style={styles.legendValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centerLabelContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerLabelValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
  },
  centerLabelText: {
    fontSize: 14,
    color: "#64748b",
  },
  legendContainer: {
    width: "100%",
    gap: 12,
    marginTop: 20,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  legendInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  legendColor: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  legendText: {
    fontSize: 14,
    color: "#334155",
    fontWeight: "500",
  },
  legendValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
  },
});