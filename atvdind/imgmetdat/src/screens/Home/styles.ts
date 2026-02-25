import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
    gap: 12,
  },

  formSection: {
    gap: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#D7D7D7",
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1C1C1C",
  },

  input: {
    color: "black",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
  },

  errorText: {
    color: "#B00020",
    fontWeight: "500",
  },
});
