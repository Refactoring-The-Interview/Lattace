import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import "./MapS.scss";
import { token } from "./token";

mapboxgl.accessToken = token;

export const Map = () => {
    const { map, mapContainer, camControls } = useContext(MapObjectContext);
    const { lng, lat, zoom } = camControls;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/satellite-v9",
            center: [lng, lat],
            zoom: zoom,
        });
    });

    return (
        <div className="Map">
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};
