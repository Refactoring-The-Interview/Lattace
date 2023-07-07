import { useState } from "react";

export interface CamControls {
    lng: number;
    lat: number;
    zoom: number;
    setLat: React.Dispatch<React.SetStateAction<number>>;
    setLng: React.Dispatch<React.SetStateAction<number>>;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export const useCamControls = (): CamControls => {
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    return {
        lng,
        lat,
        zoom,
        setLat,
        setLng,
        setZoom,
    };
};
