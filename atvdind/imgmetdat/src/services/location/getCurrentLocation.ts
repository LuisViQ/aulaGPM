import { PermissionsAndroid, Platform } from "react-native";
import geolocation from "@react-native-community/geolocation";
import type { Local } from "../../types/location";

async function requestLocationPermission(): Promise<boolean> {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location permission",
          message: "This app needs access to your location.",
          buttonNeutral: "Ask me later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permission granted");
        return true;
      }

      console.log("Permission denied");
      return false;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }

  return true;
}

export async function getCurrentLocation(): Promise<Local | null> {
  const hasPermission = await requestLocationPermission();
  if (!hasPermission) {
    return null;
  }

  return new Promise((resolve) => {
    geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (error) => {
        console.log(error.code, error.message);
        resolve(null);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  });
}
