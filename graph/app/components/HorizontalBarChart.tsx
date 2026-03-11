import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

import { DriverInfraction } from "../types/types";

interface HorizontalBarChartProps {
  data: DriverInfraction[];
}

export function HorizontalBarChart({ data }: HorizontalBarChartProps) {
  const maxDataValue =
    data.length > 0 ? Math.max(...data.map((i) => i.value)) : 0;

  const chartMaxValue = maxDataValue + maxDataValue * 0.1;

  const chartData = data.map((item) => ({
    value: item.value,
    label: item.label,
    frontColor: "#ef4444", // Cor sólida definida direto no dado
  }));

  const barWidth = 18;
  const spacing = 24;
  const chartHeight = data.length * (barWidth + spacing);

  return (
    <View style={styles.card}>
      <View style={[styles.chartContainer, { height: chartHeight + 40 }]}>
        <BarChart
          horizontal
          data={chartData}
          barWidth={barWidth}
          barBorderRadius={4}
          spacing={spacing}
          initialSpacing={10}
          endSpacing={0}
          disableScroll={true}
          isAnimated
          frontColor="#ef4444" // Garantia extra da cor sólida para o gráfico inteiro
          noOfSections={4}
          maxValue={chartMaxValue}
          yAxisThickness={0}
          xAxisThickness={0}
          rulesColor="#f1f5f9"
          rulesType="solid"
          yAxisTextStyle={styles.axisText}
          xAxisLabelTextStyle={styles.xAxisText}
          yAxisLabelWidth={70}
          width={chartHeight}
          height={200}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Detalhamento por Motorista</Text>

        {data.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listItemLabel}>{item.label}</Text>
            <Text style={styles.listItemValue}>{item.value} infrações</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
    overflow: "hidden",
  },
  chartContainer: {
    alignItems: "flex-start",
    marginLeft: -10,
  },
  axisText: {
    color: "#64748b",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    paddingRight: 8,
  },
  xAxisText: {
    color: "#64748b",
    fontSize: 11,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 20,
  },
  listContainer: {
    gap: 12,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 4,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  listItemLabel: {
    fontSize: 14,
    color: "#475569",
    fontWeight: "500",
  },
  listItemValue: {
    fontSize: 14,
    color: "#ef4444",
    fontWeight: "bold",
  },
});
