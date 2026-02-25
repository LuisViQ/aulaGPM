import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  coords: {
    fontWeight: "500",
  },
  map: {
    width: "100%",
    height: 600,
  },

  matchParent: {
    flex: 1,
  },
  markerDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "red",
  },
  calloutContainerStyle: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
  },
  customCalloutText: {
    fontWeight: "600",
  },
});
