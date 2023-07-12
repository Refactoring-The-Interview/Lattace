import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";
import { useContext, useEffect, useRef } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { MarkerOptionProps, ThreatLevel } from "../Context/types";

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

const NUM_STEPS = 5000;
export const useMarkersMovement = () => {
    const { setMarkers, camControls } = useContext(MapObjectContext);
    const { lat, lng } = camControls;
    const step = useRef(0);

    useEffect(() => {
        const center = [lat, lng];
        const radius = 10;
        const options = {
            steps: NUM_STEPS,
        };

        // need to move the points in a circle

        const circle = turf
            .circle(center, radius, options)
            ?.geometry?.coordinates[0].reverse();

        const circle2 = turf
            .circle(center, radius + 10, options)
            ?.geometry?.coordinates[0].reverse();

        const interval = setInterval(() => {
            setMarkers((markers) => {
                const newMarkers = markers.map(
                    (marker: MarkerOptionProps, index) => {
                        const { threatLevel, offset } = marker;

                        const circlePoint = step.current % NUM_STEPS;

                        const coors =
                            threatLevel === ThreatLevel.ANGEL
                                ? [
                                      circle[circlePoint][0] + offset[0],
                                      circle[circlePoint][1] + offset[1],
                                  ]
                                : [
                                      circle2[circlePoint][0] + offset[0],
                                      circle2[circlePoint][1] + offset[1],
                                  ];

                        return {
                            ...marker,
                            GPS: coors,
                            rotation: (marker.rotation + 360 / NUM_STEPS) % 360,
                        } as MarkerOptionProps;
                    }
                );

                return newMarkers;
            });

            step.current = step.current + 1;
        }, 50);

        return () => clearInterval(interval);
    }, [setMarkers]);
};
