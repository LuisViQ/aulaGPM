import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
export type ChartItem = {
  value: number;
  color: string;
  label: string;
  icon: IconName;
};
type IconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];
export function ChartBlock({
  title,
  data,
}: {
  title: string;
  data: ChartItem[];
}) {
  return (
    <View style={styles.chartCard}>
      <Text style={styles.chartTitle}>{title}</Text>

      <PieChart
        data={data.map((i) => ({ value: i.value, color: i.color }))}
        radius={120}
        donut
        innerRadius={65}
        isAnimated
        showText={false}
      />

      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: item.color }]}
            />
            <MaterialCommunityIcons name={item.icon} size={18} color="#222" />
            <Text style={styles.legendText}>
              {item.label} - {item.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  chartCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },

  chartTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 16,
  },

  legendContainer: {
    width: "100%",
    marginTop: 20,
    gap: 10,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#f9fafb",
    padding: 10,
    borderRadius: 10,
  },

  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },

  legendText: {
    fontSize: 14,
    color: "#111827",
  },
});
