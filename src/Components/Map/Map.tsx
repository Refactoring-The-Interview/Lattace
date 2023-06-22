import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { Markers } from "../MapMarker/Markers";
import {
    FriendlyJetElement,
    banditJetElement,
} from "../MarkerElements/MarkerAirCraft";
import "./MapS.scss";
import { token } from "./token";

mapboxgl.accessToken = token;

export const Map = () => {
    const { map, mapContainer, camControls, markers, setMarkers } =
        useContext(MapObjectContext);
    let { lng, lat, zoom } = camControls;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/satellite-v9",
            center: [lng, lat],
            zoom: zoom,
        });
    });

    //dummy Air craft Bandits

    const airFelid = [
        {
            icon: FriendlyJetElement(),
            draggable: true,
            GPS: [lng + 0.1, lat - 0.1],
            id: 1,
        },
        {
            icon: FriendlyJetElement(),
            draggable: true,
            GPS: [lng + 0.1, lat - 0.3],
            id: 2,
        },
        {
            icon: FriendlyJetElement(),
            draggable: true,
            GPS: [lng + 0.4, lat - 0.22],
            id: 3,
        },
        {
            icon: banditJetElement(),
            draggable: true,
            GPS: [lng + 0.13, lat],
            id: 4,
        },
        {
            icon: banditJetElement(),
            draggable: true,
            GPS: [lng + 0.34, lat],
            id: 5,
        },
        {
            icon: banditJetElement(),
            draggable: true,
            GPS: [lng + 0.21, lat],
            id: 6,
        },
    ];

    airFelid.forEach((plane, item) => {
        Markers(plane);
    });

    return (
        <div className="Map">
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};
