import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ReactNode, createContext, useEffect, useState } from "react";

import { token } from "../Map/token";
mapboxgl.accessToken = token;

interface MyMapObjectContext {
    map: any;
    setMap(map: any): void;
}

export const MyMapObjectContext = createContext<MyMapObjectContext>({
    map: {},
    setMap: () => {},
});

interface Props {
    children: ReactNode;
}

export const MapObjectContext = ({ children }: Props) => {
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        console.log(map);
    }, [map, setMap]);
    return (
        <MyMapObjectContext.Provider
            value={{
                map,
                setMap,
            }}
        >
            {children}
        </MyMapObjectContext.Provider>
    );
};
