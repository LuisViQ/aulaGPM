import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { PrimaryButton } from "../../components/PrimaryButton";
import { LocationMap } from "../../components/LocationMap";
import { getCurrentLocation } from "../../services/location/getCurrentLocation";
import type { Local } from "../../types/location";

import { ScrollView, Text } from "react-native";

export function Home() {
  const [local, setLocal] = useState<Local | null>(null);
  const [viewMap, setViewMap] = useState(false);

  const changeVisibilityMap = () => {
    setViewMap((prev) => !prev);
  };

  useEffect(() => {
    getCurrentLocation().then((coords) => {
      if (coords) {
        setLocal(coords);
      }
    });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <PrimaryButton
        title={viewMap ? "Esconder mapa" : "Ver localizacao"}
        onPress={changeVisibilityMap}
        disabled={!local}
      />

      <Text>local: {local ? "OK" : "NAO"}</Text>

      {viewMap && local && <LocationMap />}
    </ScrollView>
  );
}
