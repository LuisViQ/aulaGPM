import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChartBlock } from "../components/chartBlock";
import { DriversInfractionsChart } from "../components/driversInfractionsChart";
import mockedData from "../data/mockedData.json";
import { ChartConfigMap, ChartItem, IconName, RawItem } from "../types/types";
import { styles } from "./styles";

const infractionsMap: ChartConfigMap = {
  velocidade: { icon: "speedometer", color: "#ef4444", label: "Velocidade" },
  frenagem: { icon: "car-brake-alert", color: "#f97316", label: "Frenagem" },
  aceleração: { icon: "flash", color: "#eab308", label: "Aceleração" },
  "curva acentuada": {
    icon: "steering",
    color: "#8b5cf6",
    label: "Curva Acentuada",
  },
};

function formatData(items: RawItem[], map: ChartConfigMap): ChartItem[] {
  return items.map((item) => {
    const key = (item.text || item.label || "").trim().toLowerCase();

    const fallbackLabel = item.label || item.text || "Desconhecido";

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
        <Text style={styles.title}>Infrações</Text>
        <Text style={styles.description}>
          Monitore as categorias de violação e identifique os motoristas com o
          maior número de incidentes.
        </Text>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{totalInfractions}</Text>
            <Text style={styles.summaryLabel}>Total de Infrações</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{topDriver?.label ?? "-"}</Text>
            <Text style={styles.summaryLabel}>Principal Infrator</Text>
          </View>
        </View>

        <ChartBlock
          title="Infrações por Tipo"
          data={infractionsData}
          isThreeD={true}
          hasShadow={true}
        />

        <DriversInfractionsChart data={mockedData.driversWithMoreInfractions} />
      </ScrollView>
    </SafeAreaView>
  );
}
