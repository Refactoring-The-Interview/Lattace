import { ReactNode, createContext, useState } from "react";

interface MapContext {
    lng: number;
    lat: number;
    zoom: number;
    setLng(newLng: number): void;
    setLat(newLat: number): void;
    setZoom(newZoom: number): void;
}

export const MyMapContext = createContext<MapContext>({
    lng: -70.9,
    lat: 42.35,
    zoom: 9,
    setLng: () => {},
    setLat: () => {},
    setZoom: () => {},
});

interface Props {
    children: ReactNode;
}

export const MyMapContextProvider = ({ children }: Props) => {
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    return (
        <MyMapContext.Provider
            value={{
                lng,
                lat,
                zoom,
                setLat,
                setLng,
                setZoom,
            }}
        >
            {children}
        </MyMapContext.Provider>
    );
};
