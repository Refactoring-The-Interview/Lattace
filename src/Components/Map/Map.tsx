import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect, useRef } from "react";
import { MyMapContext } from "../Context/MyMapContextProvider";
import "./MapS.scss";
import { token } from "./token";

mapboxgl.accessToken = token;

export const Map = () => {
    const mapContainer = useRef(null) as any;
    const map = useRef(null) as any;
    const { zoom, lng, lat } = useContext(MyMapContext);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        else {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/satellite-v9",
                center: [lng, lat],
                zoom: zoom,
            });
        }
    });

    return (
        <div className="Map">
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};
