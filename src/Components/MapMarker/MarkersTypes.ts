export interface MarkerOptionProps {
    icon: HTMLElement;
    draggable?: boolean;
    GPS: number[];
    id: number;
    newMarker?: mapboxgl.Marker;
}
