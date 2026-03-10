import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChartBlock, ChartItem } from "../components/chartBlock";
import mockedData from "../data/mockedData.json";
import { IconName, RawItem } from "../types/types";
import { styles } from "./styles";

type ChartConfigMap = Record<
  string,
  { icon: IconName; color: string; label: string }
>;

const vehicleTypeMap: ChartConfigMap = {
  car: { icon: "car", color: "#3b82f6", label: "Car" },
  truck: { icon: "truck", color: "#f97316", label: "Truck" },
  motorbike: { icon: "motorbike", color: "#22c55e", label: "Motorbike" },
  van: { icon: "van-passenger", color: "#a855f7", label: "Van" },
};

const statusMap: ChartConfigMap = {
  connected: { icon: "engine", color: "#16a34a", label: "Connected" },
  off: { icon: "engine-off", color: "#6b7280", label: "Off" },
  "outdated 30m": {
    icon: "clock-alert-outline",
    color: "#f59e0b",
    label: "Outdated 30m",
  },
  "outdated 24h": {
    icon: "calendar-alert",
    color: "#ef4444",
    label: "Outdated 24h",
  },
};

function formatData(items: RawItem[], map: ChartConfigMap): ChartItem[] {
  return items.map((item) => {
    const key = (item.text || item.label || "").toLowerCase();

    const config = map[key] ?? {
      icon: "help-circle" as IconName,
      color: "#9ca3af",
      label: item.label || item.text || "Unknown",
    };

    return {
      value: item.value,
      color: config.color,
      icon: config.icon,
      label: config.label,
    };
  });
}

export default function HomeScreen() {
  const [vehicleTypeData, setVehicleTypeData] = useState<ChartItem[]>([]);
  const [vehicleStatusData, setVehicleStatusData] = useState<ChartItem[]>([]);

  useEffect(() => {
    setVehicleTypeData(
      formatData(mockedData.vehiclesByType as RawItem[], vehicleTypeMap),
    );

    setVehicleStatusData(
      formatData(mockedData.vehiclesByStatus as RawItem[], statusMap),
    );
  }, []);

  const totalVehicles = vehicleTypeData.reduce(
    (acc, item) => acc + item.value,
    0,
  );

  const connectedVehicles =
    vehicleStatusData.find((item) => item.label === "Connected")?.value ?? 0;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Fleet Dashboard</Text>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <MaterialCommunityIcons
              name="car-multiple"
              size={22}
              color="#2563eb"
            />
            <Text style={styles.summaryValue}>{totalVehicles}</Text>
            <Text style={styles.summaryLabel}>Vehicles</Text>
          </View>

          <View style={styles.summaryCard}>
            <MaterialCommunityIcons name="engine" size={22} color="#16a34a" />
            <Text style={styles.summaryValue}>{connectedVehicles}</Text>
            <Text style={styles.summaryLabel}>Connected</Text>
          </View>
        </View>

        <ChartBlock title="Vehicles by Type" data={vehicleTypeData} />
        <ChartBlock title="Vehicles by Status" data={vehicleStatusData} />
      </ScrollView>
    </SafeAreaView>
  );
}
