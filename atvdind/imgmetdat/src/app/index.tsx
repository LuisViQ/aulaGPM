import Mapbox from "@rnmapbox/maps";
import { Routes } from "../routes";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.setOptions({
  duration: 2000,
  fade: true,
});
const MAPBOX_ACCESS_TOKEN = process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN;
if (MAPBOX_ACCESS_TOKEN) {
  Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);
}

export default function App() {
  return <Routes />;
}
