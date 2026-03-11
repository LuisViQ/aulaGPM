import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SpeedChartsBlock } from "../components/speedChartsBlock";
import mockedData from "../data/mockedData.json";
import {
  DateOption,
  IconName,
  SpeedDataPoint,
  VehicleOption,
  VehicleSpeedItem,
} from "../types/types";
import { styles } from "./styles";

const vehicleTypeMap: Record<
  string,
  { icon: IconName; color: string; label: string }
> = {
  carro: { icon: "car", color: "#3b82f6", label: "Carro" },
  caminhão: { icon: "truck", color: "#f97316", label: "Caminhão" },
  moto: { icon: "motorbike", color: "#22c55e", label: "Moto" },
  van: { icon: "van-passenger", color: "#a855f7", label: "Van" },
};

const vehicles = mockedData.vehicles as VehicleOption[];
const dateOptions = mockedData.speedDateOptions as DateOption[];
const vehicleSpeedData = mockedData.vehicleSpeedByVehicle as VehicleSpeedItem[];

const defaultVehicleId = vehicles[0]?.id ?? "";
const defaultDate = dateOptions[0]?.value ?? "";

export default function SpeedScreen() {
  const [selectedVehicleId, setSelectedVehicleId] =
    useState<string>(defaultVehicleId);
  const [selectedDate, setSelectedDate] = useState<string>(defaultDate);
  const [data, setData] = useState<SpeedDataPoint[]>([]);

  useEffect(() => {
    const selectedVehicle = vehicleSpeedData.find(
      (item) => item.vehicleId === selectedVehicleId,
    );

    const selectedDateData =
      selectedVehicle?.dates.find((item) => item.date === selectedDate)?.data ??
      [];

    setData(selectedDateData);
  }, [selectedVehicleId, selectedDate]);

  const selectedVehicleObj = vehicles.find(
    (item) => item.id === selectedVehicleId,
  );
  const selectedVehicleLabel = selectedVehicleObj?.label ?? "-";

  const selectedVehicleType = (
    selectedVehicleObj?.type || "carro"
  ).toLowerCase();
  const vehicleConfig =
    vehicleTypeMap[selectedVehicleType] || vehicleTypeMap["carro"];

  const selectedDateLabel =
    dateOptions.find((item) => item.value === selectedDate)?.label ?? "-";

  const maxSpeed =
    data.length > 0 ? Math.max(...data.map((item) => item.value)) : 0;

  const averageSpeed =
    data.length > 0
      ? Math.round(
          data.reduce((total, item) => total + item.value, 0) / data.length,
        )
      : 0;

  const totalRecords = data.length;

  const speedStatus = useMemo(() => {
    if (maxSpeed >= 70) return "Alto";
    if (maxSpeed >= 40) return "Moderado";
    return "Baixo";
  }, [maxSpeed]);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Velocidade do Veículo</Text>
        <Text style={styles.description}>
          Monitore a velocidade por veículo selecionado e data.
        </Text>

        <View style={styles.filterCard}>
          <View style={styles.selectGroup}>
            <Text style={styles.selectLabel}>Veículo</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedVehicleId}
                onValueChange={(itemValue) => setSelectedVehicleId(itemValue)}
                style={styles.picker}
              >
                {vehicles.map((vehicle) => (
                  <Picker.Item
                    key={vehicle.id}
                    label={vehicle.label}
                    value={vehicle.id}
                  />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.selectGroup}>
            <Text style={styles.selectLabel}>Data</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedDate}
                onValueChange={(itemValue) => setSelectedDate(itemValue)}
                style={styles.picker}
              >
                {dateOptions.map((date) => (
                  <Picker.Item
                    key={date.value}
                    label={date.label}
                    value={date.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <MaterialCommunityIcons
              name={vehicleConfig.icon}
              size={28}
              color={vehicleConfig.color}
            />
            <Text style={styles.summaryLabel}>Veículo Selecionado</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{selectedDateLabel}</Text>
            <Text style={styles.summaryLabel}>Data Selecionada</Text>
          </View>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{maxSpeed} km/h</Text>
            <Text style={styles.summaryLabel}>Velocidade Máx.</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{averageSpeed} km/h</Text>
            <Text style={styles.summaryLabel}>Velocidade Média</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{speedStatus}</Text>
            <Text style={styles.summaryLabel}>Status de Vel.</Text>
          </View>
        </View>

        <SpeedChartsBlock
          barTitle="Velocidade por Hora"
          lineTitle="Tendência de Velocidade"
          data={data}
        />

        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Resumo de Dados</Text>
          <Text style={styles.footerText}>
            {selectedVehicleLabel} possui {totalRecords} registros de velocidade
            em {selectedDateLabel}.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
