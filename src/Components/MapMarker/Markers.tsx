import mapboxgl from "mapbox-gl";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { MarkerOptionProps } from "./MarkersTypes";

export const Markers = ({ icon, draggable, GPS, id }: MarkerOptionProps) => {
    const { map, mapContainer, camControls, setMarkers, markers } =
        useContext(MapObjectContext);

    useEffect(() => {
        if (map.current) {
            const newMarker = new mapboxgl.Marker({
                element: icon,
                draggable: draggable,
            });
            setMarkers([...markers, newMarker]);
            newMarker.setLngLat([GPS[0], GPS[1]]);
            newMarker.addTo(map.current);

            console.log(id, markers, GPS, newMarker);
        }
    }, [map]);
};
