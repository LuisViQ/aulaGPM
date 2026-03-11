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
export type ChartBlockProps = {
  title: string;
  data: ChartItem[];
  donut?: boolean;
  isThreeD?: boolean;
  centerLabelComponent?: React.ReactNode;
  hasShadow?: boolean;
};
export type VehicleOption = {
  id: string;
  label: string;
  type: string;
};

export type DateOption = {
  label: string;
  value: string;
};

export type VehicleSpeedDate = {
  date: string;
  data: SpeedDataPoint[];
};

export type VehicleSpeedItem = {
  vehicleId: string;
  vehicleLabel: string;
  dates: VehicleSpeedDate[];
};
