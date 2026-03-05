import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
export default function TabsLayout() {
  return (
    <Tabs initialRouteName="warehouse" screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="warehouse"
        options={{
          title: "Warehouse",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="warehouse" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: "Users",
          tabBarIcon: () => <Feather name="users" size={20} color="black" />,
        }}
      />
      <Tabs.Screen
        name="checklist"
        options={{
          title: "Checklist",
          tabBarIcon: () => (
            <MaterialIcons name="checklist" size={20} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
