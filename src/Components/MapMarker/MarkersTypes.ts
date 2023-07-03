export interface MarkerOptionProps {
    icon: HTMLElement;
    draggable?: boolean;
    GPS: number[];
    threatLevel: ThreatLevel;
    id: number;
    newMarker?: mapboxgl.Marker;
}

export enum ThreatLevel {
    BANDIT,
    ANGEL,
    BOGIE,
}
