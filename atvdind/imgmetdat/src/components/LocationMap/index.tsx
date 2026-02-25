import React from "react";
import { View, Text, Button } from "react-native";
import Mapbox from "@rnmapbox/maps";
import type { MapboxCoordinate } from "../../types/location";
import { styles } from "./styles";

export function LocationMap() {
  const markerCoordinate: MapboxCoordinate = [-44.6975, -4.9873];

  const routeGeoJSON = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [-44.696748, -4.986742],
        [-44.6975, -4.9873],
        [-44.6985, -4.9885],
        [-44.6992, -4.9892],
      ],
    },
  };

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        styleURL="mapbox://styles/mapbox/satellite-v9"
      >
        <Mapbox.Camera
          followUserLocation
          followZoomLevel={13}
          centerCoordinate={markerCoordinate}
        />

        <Mapbox.UserLocation
          visible
          androidRenderMode="gps"
          showsUserHeadingIndicator
        />

        <Mapbox.ShapeSource id="routeSource" shape={routeGeoJSON}>
          <Mapbox.LineLayer
            id="routeLine"
            style={{
              lineJoin: "round",
              lineCap: "round",
              lineColor: "#FF0000",
              lineWidth: 4,
              lineOpacity: 0.9,
            }}
          />
        </Mapbox.ShapeSource>

        <Mapbox.PointAnnotation
          id="youHouse"
          coordinate={markerCoordinate}
          anchor={{ x: 0.5, y: 1 }}
        >
          <Mapbox.Callout title="ola">
            <View style={{ backgroundColor: "white", padding: 5 }}>
              <Text>Texto personalizado</Text>
              <Button
                title="Olá"
                onPress={() => {
                  console.log("test");
                }}
              />
            </View>
          </Mapbox.Callout>
        </Mapbox.PointAnnotation>
      </Mapbox.MapView>
    </View>
  );
}
