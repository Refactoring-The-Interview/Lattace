import mapboxgl from "mapbox-gl";
import { useContext, useEffect } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { MarkerOptionProps } from "./MarkersTypes";

export const useMarkers = (airFelid: MarkerOptionProps[]) => {
    const { map, setMarkers, markers } = useContext(MapObjectContext);

    useEffect(() => {
        airFelid.forEach(({ icon, draggable, id, GPS, threatLevel }) => {
            if (map.current) {
                const newMarker = new mapboxgl.Marker({
                    element: icon,
                    draggable: draggable,
                });
                newMarker.setLngLat([GPS[0], GPS[1]]);
                newMarker.addTo(map.current);

                const markerObj = {
                    icon,
                    id,
                    GPS,
                    newMarker,
                    threatLevel,
                };

                // is making to many renders
                markers.push(markerObj as any);
                const ids = markers.map((item: any) => item.id);
                const filter = markers.filter((item: any, index: number) => {
                    return !ids.includes(item.id, index + 1);
                });

                setMarkers(filter);
            }
        });
    }, [map]);
};
