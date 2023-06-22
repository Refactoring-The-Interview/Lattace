import mapboxgl from "mapbox-gl";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { MarkerOptionProps } from "./MarkersTypes";

export const Markers = ({ icon, draggable, GPS, id }: MarkerOptionProps) => {
    const { map, mapContainer, camControls, setMarkers, markers } =
        useContext(MapObjectContext);
    const { lng, lat, zoom } = camControls;

    useEffect(() => {
        if (map.current) {
            const newMarker = new mapboxgl.Marker({
                element: icon,
                draggable: draggable,
            })
                .setLngLat([GPS[0], GPS[1]])
                .addTo(map.current);

            console.log(id);
            setMarkers([...markers, newMarker]);
        }
    }, [map, mapContainer]);
};
