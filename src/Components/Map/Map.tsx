import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { useMarkers } from "../MapMarker/Markers";
import { SideBar } from "../SideBar/SideBar";
import { TrackingDetails } from "../SideBar/TrackingDetails/TrackingDetails";
import { AirCraftPopulation } from "../Testing/AirCraftPopulation";
import "./MapS.scss";
import { token } from "./token";

mapboxgl.accessToken = token;

export const Map = () => {
    const { map, mapContainer, camControls } = useContext(MapObjectContext);
    let { lng, lat, zoom } = camControls;
    const airFelid = AirCraftPopulation();

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/satellite-v9",
            center: [lng, lat],
            zoom: zoom,
        });
    });

    useMarkers(airFelid);

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
