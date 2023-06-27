import { MarkerOptionProps } from "../Components/MapMarker/MarkersTypes";

export const removeDuplicateMarkers = (markers: MarkerOptionProps[]) => {
    const ids = markers.map((item: any) => item.id);

    return markers.filter((item: any, index: number) => {
        return !ids.includes(item.id, index + 1);
    });
};
