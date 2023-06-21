import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect, useRef } from "react";

import { MyMapCamContext } from "../Context/MyMapCamContextProvider";
import "./MapS.scss";
import { token } from "./token";

mapboxgl.accessToken = token;

export const Map = () => {
    const mapContainer = useRef(null) as any;
    const map = useRef(null) as any;
    const { zoom, lng, lat } = useContext(MyMapCamContext);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/satellite-v9",
            center: [lng, lat],
            zoom: zoom,
        });
        const marker = new mapboxgl.Marker({
            color: "red",
            draggable: true,
        })
            .setLngLat([lng, lat])
            .addTo(map.current);
    });

    return (
        <div className="Map">
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};

// will need to have the markers in context for the sidebar to see?
