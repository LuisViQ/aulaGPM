import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChartBlock, ChartItem } from "../components/chartBlock";
import { DriversInfractionsChart } from "../components/driversInfractionsChart";
import mockedData from "../data/mockedData.json";
import { ChartConfigMap, IconName, RawItem } from "../types/types";
import { styles } from "./styles";

const infractionsMap: ChartConfigMap = {
  speed: { icon: "speedometer", color: "#ef4444", label: "Speed" },
  braking: { icon: "car-brake-alert", color: "#f97316", label: "Braking" },
  acceleration: { icon: "flash", color: "#eab308", label: "Acceleration" },
  "sharp curve": {
    icon: "steering",
    color: "#8b5cf6",
    label: "Sharp Curve",
  },
};

function formatData(items: RawItem[], map: ChartConfigMap): ChartItem[] {
  return items.map((item) => {
    const key = (item.text || item.label || "").trim().toLowerCase();

    const fallbackLabel = item.label || item.text || "Unknown";

    const config = map[key] ?? {
      icon: "help-circle" as IconName,
      color: "#9ca3af",
      label: fallbackLabel,
    };

    return {
      value: item.value,
      color: config.color,
      icon: config.icon,
      label: config.label,
    };
  });
}

export default function InfractionsScreen() {
  const [infractionsData, setInfractionsData] = useState<ChartItem[]>([]);

  useEffect(() => {
    setInfractionsData(
      formatData(mockedData.infractionsByType as RawItem[], infractionsMap),
    );
  }, []);

  const totalInfractions = useMemo(() => {
    return infractionsData.reduce((total, item) => total + item.value, 0);
  }, [infractionsData]);

  const topDriver = useMemo(() => {
    return mockedData.driversWithMoreInfractions[0];
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Infractions</Text>
        <Text style={styles.description}>
          Monitor violation categories and identify the drivers with the highest
          number of incidents.
        </Text>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{totalInfractions}</Text>
            <Text style={styles.summaryLabel}>Total Infractions</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{topDriver?.label ?? "-"}</Text>
            <Text style={styles.summaryLabel}>Top Driver</Text>
          </View>
        </View>

        <ChartBlock title="Infractions by Type" data={infractionsData} />

        <DriversInfractionsChart data={mockedData.driversWithMoreInfractions} />
      </ScrollView>
    </SafeAreaView>
  );
}
