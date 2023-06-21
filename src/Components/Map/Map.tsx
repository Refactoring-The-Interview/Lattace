import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import "./MapS.scss";
import { token } from "./token";
mapboxgl.accessToken = token;

export const Map = () => {
    const mapContainer = useRef(null) as any;
    const map = useRef(null) as any;
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        else {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [lng, lat],
                zoom: zoom,
            });
        }
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};

// export const map = new mapboxgl.Map({
//     container: "app", // container ID
//     style: "mapbox://styles/mapbox/streets-v12", // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9, // starting zoom
// });
