import Mapbox from "@rnmapbox/maps";

export type MapboxCoordinate = React.ComponentProps<
  typeof Mapbox.PointAnnotation
>["coordinate"];
export type Local = {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
};
