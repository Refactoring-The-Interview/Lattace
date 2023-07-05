export interface MarkerOptionProps {
    icon: HTMLElement;
    draggable?: boolean;
    GPS: number[];
    threatLevel: ThreatLevel;
    id: number;
    newMarker?: mapboxgl.Marker;
    upDateIcon?(value: any): void;
}

export enum ThreatLevel {
    BANDIT,
    ANGEL,
    BOGIE,
}
