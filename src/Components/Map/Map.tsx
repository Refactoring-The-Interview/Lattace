import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect, useRef } from "react";

import { MyMapObjectContext } from "../Context/MapObjectContext";
import { MyMapCamContext } from "../Context/MyMapCamContextProvider";
import "./MapS.scss";
import { token } from "./token";

mapboxgl.accessToken = token;

export const Map = () => {
    const mapContainer = useRef(null) as any;
    const map = useRef(null) as any;
    const { zoom, lng, lat } = useContext(MyMapCamContext);
    const { setMap } = useContext(MyMapObjectContext);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/satellite-v9",
            center: [lng, lat],
            zoom: zoom,
        });

        new mapboxgl.Marker({
            color: "red",
            draggable: true,
        })
            .setLngLat([lng, lat])
            .addTo(map.current);

        setMap(map.current);
    });

    return (
        <div className="Map">
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};
