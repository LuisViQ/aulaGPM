
import { Routes } from "../routes";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.setOptions({
  duration: 2000,
  fade: true,
});

export default function App() {
  return <Routes />;
}
