import { Entypo } from "@expo/vector-icons";
import Foundation from "@expo/vector-icons/build/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";
export default function TabsLayout() {
  return (
    <Tabs initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="infractions"
        options={{
          title: "Infrações",
          tabBarIcon: () => <Foundation name="alert" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="speed"
        options={{
          title: "Velocidade",
          tabBarIcon: () => (
            <Ionicons name="speedometer" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="regions"
        options={{
          title: "Regiões",
          tabBarIcon: () => (
            <Entypo name="location-pin" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
