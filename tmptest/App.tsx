import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { RealmProvider } from "@realm/react";
import React from "react";
import { Users } from "./app/database/schemas/users";
import { Warehouse } from "./app/database/schemas/warehouse";
import App from "./app/index";

export default function RootLayout() {
  return (
    <RealmProvider schema={[Users, Warehouse]}>
      <GluestackUIProvider mode="light">
        <App />
      </GluestackUIProvider>
    </RealmProvider>
  );
}
