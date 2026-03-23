import React from "react";
import { View, Text, Button } from "react-native";
import MapView, { 
  Marker, 
  Polyline, 
  Callout, 
  PROVIDER_GOOGLE 
} from "react-native-maps";
import { styles } from "./styles";

// No react-native-maps, o formato é { latitude, longitude } em vez de array [lon, lat]
const markerCoordinate = {
  latitude: -4.9873,
  longitude: -44.6975,
};

// Convertendo as coordenadas do GeoJSON para o formato do Google Maps
const routeCoordinates = [
  { latitude: -4.986742, longitude: -44.696748 },
  { latitude: -4.9873, longitude: -44.6975 },
  { latitude: -4.9885, longitude: -44.6985 },
  { latitude: -4.9892, longitude: -44.6992 },
];

export function LocationMap() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        mapType="satellite" // Equivalente ao satellite-v9 do Mapbox
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={{
          ...markerCoordinate,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Rota (Substitui o ShapeSource/LineLayer) */}
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#FF0000"
          strokeWidth={4}
          lineJoin="round"
          lineCap="round"
        />

        {/* Marcador (Substitui o PointAnnotation) */}
        <Marker
          coordinate={markerCoordinate}
          title="youHouse"
        >
          {/* Callout Personalizado */}
          <Callout tooltip>
            <View style={{ backgroundColor: "white", padding: 10, borderRadius: 5, minWidth: 150 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>ola</Text>
              <Text>Texto personalizado</Text>
              {/* Nota: Botões dentro de Callout no Android/iOS podem ter limitações de clique. 
                  Muitas vezes o clique é capturado pelo onCalloutPress do Marker. */}
              <Button
                title="Olá"
                onPress={() => console.log("test")}
              />
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}