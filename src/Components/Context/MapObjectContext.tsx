import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ReactNode, RefObject, createContext, useRef, useState } from "react";
import { airCraftPopulation } from "../../Apis/AirCraftPopulation";
import { MarkerOptionProps, ThreatLevel } from "./types";
import { CamControls, useCamControls } from "./useCamControls";

//public token
mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FtLWJyYW5kb24iLCJhIjoiY2xqNHVpMWdnMDUzcTNlcnEwc2FuNjZrYiJ9.-varEhIP7u33KOnsdwaP7g";

interface MapObjectContextValues {
    map: any;
    mapContainer: any;
    camControls: CamControls;
    mapMarkers: RefObject<{ [id: string]: mapboxgl.Marker }> | null;
    markers: MarkerOptionProps[];
    selectedDetails: MarkerOptionProps | null;
    setSelectedDetails(marker: MarkerOptionProps | null): void;
    setMarkers: React.Dispatch<React.SetStateAction<MarkerOptionProps[]>>;
    setThreatLevel(id: number, threatLevel: ThreatLevel): void;
}

export const MapObjectContext = createContext<MapObjectContextValues>({
    map: null,
    mapContainer: null,
    mapMarkers: null,
    markers: [],
    selectedDetails: null,
    setSelectedDetails: () => {},
    camControls: {
        lng: 0,
        lat: 0,
        zoom: 0,
        setLat: () => {},
        setLng: () => {},
        setZoom: () => {},
    },
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
    const airField = airCraftPopulation(camControls);
    const [markers, setMarkers] = useState<MarkerOptionProps[]>(airField);
    const mapMarkers = useRef<{ [id: string]: mapboxgl.Marker }>({});
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
                mapMarkers,
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
