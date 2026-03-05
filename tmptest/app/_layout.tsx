import "../global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { RealmProvider } from "@realm/react";
import { Stack } from "expo-router";
import { Checklist } from "./database/schemas/checklist";
import { Users } from "./database/schemas/users";
import { Warehouse } from "./database/schemas/warehouse";

export default function RootLayout() {
  return (
    <RealmProvider schema={[Users, Warehouse, Checklist]}>
      <GluestackUIProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </GluestackUIProvider>
    </RealmProvider>
  );
}
