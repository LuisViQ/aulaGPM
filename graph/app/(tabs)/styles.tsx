import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  container: {
    padding: 24,
    gap: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e293b",
  },
  description: {
    fontSize: 15,
    color: "#64748b",
    marginTop: -12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  summaryCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    flex: 1,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    gap: 6,
  },
  summaryValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e293b",
  },
  summaryLabel: {
    fontSize: 13,
    color: "#64748b",
  },
  filterCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    gap: 18,
  },
  selectGroup: {
    gap: 10,
  },
  selectLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#334155",
  },
  pickerWrapper: {
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    overflow: "hidden",
  },
  picker: {
    color: "#334155",
    height: 50,
  },
  footerCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    gap: 10,
  },
  footerTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1e293b",
  },
  footerText: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 22,
  },
  centerLabelContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerLabelValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
  },
  centerLabelText: {
    fontSize: 14,
    color: "#64748b",
  },
});
