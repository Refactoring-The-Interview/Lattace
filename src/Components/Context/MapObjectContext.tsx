import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ReactNode, createContext, useRef, useState } from "react";

import { token } from "../Map/token";
import { useCamControls } from "./useCamControls";
mapboxgl.accessToken = token;

interface MapObjectContextValues {
    map: any;
    mapContainer: any;
    camControls: any;
    markers: any[];
    setMarkers(markers: any): void;
}

export const MapObjectContext = createContext<MapObjectContextValues>({
    map: null,
    mapContainer: null,
    markers: [],
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

    return (
        <MapObjectContext.Provider
            value={{
                map,
                mapContainer,
                camControls,
                markers,
                setMarkers,
            }}
        >
            <>{children}</>
        </MapObjectContext.Provider>
    );
};
