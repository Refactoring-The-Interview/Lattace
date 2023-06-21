import { useState } from "react";

export const useCamControls = () => {
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
