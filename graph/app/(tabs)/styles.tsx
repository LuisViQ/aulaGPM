import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },

  container: {
    padding: 20,
    gap: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    width: "31%",
    alignItems: "center",
    elevation: 3,
  },

  summaryValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 6,
  },

  summaryLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: -10,
  },
});
