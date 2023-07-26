export interface MarkerOptionProps {
    icon: HTMLElement;
    GPS: number[];
    threatLevel: ThreatLevel;
    id: number;
    rotation: number;
    offset: number[];
}

export enum ThreatLevel {
    BANDIT,
    ANGEL,
    BOGIE,
}
