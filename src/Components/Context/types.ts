export interface MarkerOptionProps {
    icon: HTMLElement;
    draggable?: boolean;
    GPS: number[];
    threatLevel: ThreatLevel;
    id: number;
    rotation: number;
}

export enum ThreatLevel {
    BANDIT,
    ANGEL,
    BOGIE,
}
