import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { SideBar } from "../SideBar/SideBar";
import { TrackingDetails } from "../SideBar/TrackingDetails/TrackingDetails";
import "./MapS.scss";
import { useMarkers, useMarkersMovement } from "./hooks";

//public token
mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FtLWJyYW5kb24iLCJhIjoiY2xqNHVpMWdnMDUzcTNlcnEwc2FuNjZrYiJ9.-varEhIP7u33KOnsdwaP7g";

export const Map = () => {
    const { map, mapContainer, camControls } = useContext(MapObjectContext);
    let { lng, lat, zoom } = camControls;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/satellite-v9",
            center: [lat, lng],
            zoom: zoom,
        });
    });

    useMarkers();
    useMarkersMovement();

    return (
        <div className="Map">
            <div ref={mapContainer} className="map-container">
                <div className="sideBar">
                    <SideBar />
                    <TrackingDetails />
                </div>
            </div>
        </div>
    );
};
