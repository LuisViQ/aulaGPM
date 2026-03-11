import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChartBlock } from "../components/chartBlock";
import mockedData from "../data/mockedData.json";
import { ChartConfigMap, ChartItem, IconName, RawItem } from "../types/types";
import { styles } from "./styles";

const vehicleTypeMap: ChartConfigMap = {
  carro: { icon: "car", color: "#3b82f6", label: "Carro" },
  caminhão: { icon: "truck", color: "#f97316", label: "Caminhão" },
  moto: { icon: "motorbike", color: "#22c55e", label: "Moto" },
  van: { icon: "van-passenger", color: "#a855f7", label: "Van" },
};

const statusMap: ChartConfigMap = {
  ligado: { icon: "engine", color: "#16a34a", label: "Ligado" },
  desligado: { icon: "engine-off", color: "#6b7280", label: "Desligado" },
  "desatualizado 30m": {
    icon: "clock-alert-outline",
    color: "#f59e0b",
    label: "Desatualizado 30m",
  },
  "desatualizado 24h": {
    icon: "calendar-alert",
    color: "#ef4444",
    label: "Desatualizado 24h",
  },
};

function formatData(items: RawItem[], map: ChartConfigMap): ChartItem[] {
  return items.map((item) => {
    const key = (item.text || item.label || "").toLowerCase();

    const config = map[key] ?? {
      icon: "help-circle" as IconName,
      color: "#9ca3af",
      label: item.label || item.text || "Desconhecido",
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
  const totalValue = vehicleStatusData.reduce(
    (acc, item) => acc + item.value,
    0,
  );
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
    vehicleStatusData.find((item) => item.label === "Ligado")?.value ?? 0;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Painel da Frota</Text>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <MaterialCommunityIcons
              name="car-multiple"
              size={22}
              color="#2563eb"
            />
            <Text style={styles.summaryValue}>{totalVehicles}</Text>
            <Text style={styles.summaryLabel}>Veículos</Text>
          </View>

          <View style={styles.summaryCard}>
            <MaterialCommunityIcons name="engine" size={22} color="#16a34a" />
            <Text style={styles.summaryValue}>{connectedVehicles}</Text>
            <Text style={styles.summaryLabel}>Ligado</Text>
          </View>
        </View>

        <ChartBlock title="Veículos por Tipo" data={vehicleTypeData} />
        <ChartBlock
          title="Veículos por Status"
          data={vehicleStatusData}
          centerLabelComponent={
            <View style={styles.centerLabelContainer}>
              <Text style={styles.centerLabelValue}>{totalValue}</Text>
              <Text style={styles.centerLabelText}>Total</Text>
            </View>
          }
          donut={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
