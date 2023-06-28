import mapboxgl, { Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ReactNode, createContext, useRef, useState } from "react";

import { token } from "../Map/token";
import { MarkerOptionProps } from "../MapMarker/MarkersTypes";
import { useCamControls } from "./useCamControls";
mapboxgl.accessToken = token;

interface MapObjectContextValues {
    map: any;
    mapContainer: any;
    camControls: any;
    markers: Marker[] | any;
    filteredMarkers: Marker[] | any;
    setFilteredMarkers(markers: Marker[] | MarkerOptionProps[]): void;
    setMarkers(markers: Marker[] | MarkerOptionProps[]): void;
}

export const MapObjectContext = createContext<MapObjectContextValues>({
    map: null,
    mapContainer: null,
    markers: [],
    filteredMarkers: [],
    setFilteredMarkers: () => {},
    camControls: () => {},
    setMarkers: () => {},
});

interface Props {
    children: ReactNode;
}

export const MapObjectContextProvider = ({ children }: Props) => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const camControls = useCamControls();
    const [markers, setMarkers] = useState<any[]>([]);
    const [filteredMarkers, setFilteredMarkers] = useState<any[]>([]);

    return (
        <MapObjectContext.Provider
            value={{
                map,
                mapContainer,
                camControls,
                markers,
                filteredMarkers,
                setMarkers,
                setFilteredMarkers,
            }}
        >
            <>{children}</>
        </MapObjectContext.Provider>
    );
};
