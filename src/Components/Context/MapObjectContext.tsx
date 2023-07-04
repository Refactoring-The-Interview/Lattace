import mapboxgl, { Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ReactNode, createContext, useRef, useState } from "react";

import { token } from "../Map/token";
import { MarkerOptionProps, ThreatLevel } from "../MapMarker/MarkersTypes";
import { useCamControls } from "./useCamControls";

mapboxgl.accessToken = token;

interface MapObjectContextValues {
    map: any;
    mapContainer: any;
    camControls: any;
    markers: Marker[] | any;
    selectedDetails: MarkerOptionProps | null;
    setSelectedDetails(marker: MarkerOptionProps): void;
    setMarkers(markers: Marker[] | MarkerOptionProps[]): void;
    setThreatLevel(id: number, threatLevel: ThreatLevel): void;
}

export const MapObjectContext = createContext<MapObjectContextValues>({
    map: null,
    mapContainer: null,
    markers: [],
    selectedDetails: null,
    setSelectedDetails: () => {},
    camControls: () => {},
    setMarkers: () => {},
    setThreatLevel: (id: number, threatLevel: ThreatLevel) => {},
});

interface Props {
    children: ReactNode;
}

export const MapObjectContextProvider = ({ children }: Props) => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const camControls = useCamControls();
    const [markers, setMarkers] = useState<any[]>([]);
    const [selectedDetails, setSelectedDetails] =
        useState<MarkerOptionProps | null>(null);

    const setThreatLevel = (markerId: number, threatLevel: ThreatLevel) => {
        setMarkers((m) => {
            const newMarkers = [...m];
            const index = newMarkers.findIndex(({ id }) => id === markerId);
            newMarkers[index].threatLevel = threatLevel;
            return newMarkers;
        });
    };

    return (
        <MapObjectContext.Provider
            value={{
                map,
                mapContainer,
                camControls,
                markers,
                selectedDetails,
                setSelectedDetails,
                setMarkers,
                setThreatLevel,
            }}
        >
            <>{children}</>
        </MapObjectContext.Provider>
    );
};
