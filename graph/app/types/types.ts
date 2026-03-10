import { MaterialCommunityIcons } from "@expo/vector-icons";

export type RawItem = {
  text?: string;
  label?: string;
  value: number;
};

export type IconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];
export type ChartConfigMap = Record<
  string,
  { icon: IconName; color: string; label: string }
>;
export type DriversInfractionsChartProps = {
  data: DriverInfraction[];
};
export type DriverInfraction = {
  label: string;
  value: number;
};
export type RegionData = {
  label: string;
  value: number;
};

export type RegionRadarChartProps = {
  data: RegionData[];
};
export type SpeedDataPoint = {
  label: string;
  value: number;
};

export type SpeedChartsBlockProps = {
  barTitle: string;
  lineTitle: string;
  data: SpeedDataPoint[];
};
export type ChartItem = {
  value: number;
  color: string;
  label: string;
  icon: IconName;
};
