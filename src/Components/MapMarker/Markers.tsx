import mapboxgl from "mapbox-gl";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";

export const Markers = () => {
    const { map, mapContainer, camControls, setMarkers, markers } =
        useContext(MapObjectContext);
    const { lng, lat, zoom } = camControls;

    useEffect(() => {
        if (map.current) {
            const newMarker = new mapboxgl.Marker({
                color: "blue",
                draggable: true,
            })
                .setLngLat([lng, lat])
                .addTo(map.current);

            setMarkers([...markers, newMarker]);
        }
    }, [map, mapContainer]);
};
