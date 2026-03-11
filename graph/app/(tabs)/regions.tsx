import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RegionRadarChart } from "../components/regionRadarChart";
import mockedData from "../data/mockedData.json";
import { styles } from "./styles";

export default function RegionsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Regiões</Text>

        <Text style={styles.description}>
          Distribuição dos veículos da frota pelas regiões operacionais.
        </Text>

        <RegionRadarChart data={mockedData.vehiclesByRegion} />
      </ScrollView>
    </SafeAreaView>
  );
}
