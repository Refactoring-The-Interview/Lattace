import mapboxgl from "mapbox-gl";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { MarkerOptionProps } from "./MarkersTypes";

export const useMarkers = (airFelid: MarkerOptionProps[]) => {
    const { map, setMarkers, markers } = useContext(MapObjectContext);

    useEffect(() => {
        airFelid.forEach(({ icon, draggable, id, GPS }) => {
            if (map.current) {
                const newMarker = new mapboxgl.Marker({
                    element: icon,
                    draggable: draggable,
                });
                newMarker.setLngLat([GPS[0], GPS[1]]);
                newMarker.addTo(map.current);

                const markerObj = {
                    icon: icon,
                    id: id,
                    GPS: GPS,
                    newMarker: newMarker,
                };
                markers.push(markerObj);
                setMarkers(markers);
            }
        });
    }, [map]);
};
