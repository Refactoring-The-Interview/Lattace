import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { MarkerOptionProps } from "../Context/types";

export const useMarkers = () => {
    const { map, markers, mapMarkers } = useContext(MapObjectContext);

    useEffect(() => {
        markers.forEach(({ icon, draggable, id, GPS, rotation }) => {
            if (map.current && mapMarkers?.current) {
                if (mapMarkers.current?.[id]) {
                    mapMarkers.current[id].remove();
                }
                const updateNewMarker = new mapboxgl.Marker({
                    element: icon,
                    draggable: draggable,
                });

                updateNewMarker.setLngLat([GPS[0], GPS[1]]);
                updateNewMarker.setRotation(rotation);
                mapMarkers.current[id] = updateNewMarker;
                updateNewMarker.addTo(map.current);
            }
        });
    }, [map, mapMarkers, markers]);
};

export const useMarkersMovement = () => {
    const { setMarkers, camControls } = useContext(MapObjectContext);
    const { lat, lng } = camControls;

    useEffect(() => {
        setInterval(() => {
            setMarkers((markers) => {
                const newMarkers = markers.map(
                    (marker: MarkerOptionProps, index) => {
                        const { GPS } = marker;

                        const center = [lat, lng];
                        const radius = 1;
                        const options = {
                            steps: 5,
                        };

                        // need to move the points in a circle

                        const coors = [
                            turf.circle(center, radius, options)?.geometry
                                ?.coordinates[0][index][1],
                            turf.circle(center, radius, options)?.geometry
                                ?.coordinates[0][index][0],
                        ] as number[];

                        return {
                            ...marker,
                            GPS: coors,
                            rotation: marker.rotation,
                        } as MarkerOptionProps;
                    }
                );

                return newMarkers;
            });
        }, 5000);
    }, [setMarkers]);
};
