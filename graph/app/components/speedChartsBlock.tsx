import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarChart, CurveType, LineChart } from "react-native-gifted-charts";
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

        <View style={styles.chartArea}>
          <LineChart
            data={data}
            spacing={22}
            curveType={CurveType.QUADRATIC}
            thickness={4}
            isAnimated
            animateOnDataChange
            color="#0BA5A4"
            yAxisColor="#0BA5A4"
            xAxisColor="#0BA5A4"
            showVerticalLines
            verticalLinesColor="rgba(14,164,164,0.4)"
            yAxisTextStyle={styles.axisText}
            xAxisLabelTextStyle={styles.axisText}
            focusEnabled
            showStripOnFocus
            focusedDataPointColor="#0BA5A4"
            focusedDataPointRadius={5}
            pointerConfig={{
              pointerStripUptoDataPoint: true,
              pointerStripColor: "#0BA5A4",
              pointerStripWidth: 2,
              pointerColor: "#0BA5A4",
              radius: 5,
              activatePointersOnLongPress: false,
              autoAdjustPointerLabelPosition: true,
              pointerLabelWidth: 90,
              pointerLabelHeight: 60,
              pointerLabelComponent: (items: any[]) => {
                const item = items?.[0];

                if (!item) return null;

                return (
                  <View
                    style={{
                      backgroundColor: "#111827",
                      paddingHorizontal: 10,
                      paddingVertical: 8,
                      borderRadius: 10,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 12,
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </Text>

                    <Text
                      style={{
                        color: "#d1d5db",
                        fontSize: 12,
                        textAlign: "center",
                        marginTop: 2,
                      }}
                    >
                      {item.value} km/h
                    </Text>
                  </View>
                );
              },
            }}
          />
        </View>
      </View>
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>{barTitle}</Text>

        <View style={styles.chartArea}>
          <BarChart
            data={data}
            barWidth={14}
            spacing={12}
            frontColor="#3b82f6"
            noOfSections={4}
            yAxisThickness={1}
            xAxisThickness={1}
            yAxisTextStyle={styles.axisText}
            xAxisLabelTextStyle={styles.axisText}
            hideRules={false}
          />
        </View>
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

  chartArea: {
    width: "100%",
    alignItems: "center",
  },

  axisText: {
    color: "#6b7280",
    fontSize: 11,
  },
});
