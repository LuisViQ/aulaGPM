import { MaterialCommunityIcons } from "@expo/vector-icons";

export type RawItem = {
  text?: string;
  label?: string;
  value: number;
};

export type IconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];
