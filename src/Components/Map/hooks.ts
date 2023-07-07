import mapboxgl from "mapbox-gl";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { MarkerOptionProps } from "../Context/types";

// reacts to data store changes and writes to the map
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

                // add to our ref store
                mapMarkers.current[id] = updateNewMarker;

                // add to the map
                updateNewMarker.addTo(map.current);
            }
        });
    }, [map, mapMarkers, markers]);
};

// changes the data store for markers to move icons
export const useMarkersMovement = () => {
    const { setMarkers } = useContext(MapObjectContext);
    useEffect(() => {
        const interval = setInterval(() => {
            setMarkers((markers) => {
                const newMarkers = markers.map((marker: MarkerOptionProps) => {
                    // console.log(rotation, " rotation");
                    // newMarker.remove();
                    // newMarker = new mapboxgl.Marker({
                    //     element: icon,
                    //     draggable: draggable,
                    // });
                    // newMarker.setLngLat([GPS[0], (GPS[1] += 0.01)]);
                    // newMarker.addTo(map.current);
                    // GPS = [GPS[0], (GPS[1] += 0.002)];

                    // think state seprate from the reactive layer
                    return {
                        ...marker,
                        GPS: [marker.GPS[0] + 0.0005, marker.GPS[1] + 0.0005],
                        rotation: marker.rotation + 5,
                    } as MarkerOptionProps;
                });

                return newMarkers;
            });
        }, 1000);

        return clearInterval(interval);
    }, [setMarkers]);
};
