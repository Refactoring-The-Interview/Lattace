import { ThreatLevel } from "../Components/MapMarker/MarkersTypes";

export const getTrackDetailsBtnAttributes = (threatLevel: ThreatLevel) => {
    switch (threatLevel) {
        case ThreatLevel.ANGEL:
            return {
                variant: "outline-primary",
                className: "angel",
                title: "Angel",
            };
        case ThreatLevel.BANDIT:
            return {
                variant: "outline-danger",
                className: "bandit",
                title: "Bandit",
            };
        case ThreatLevel.BOGIE:
        default:
            return {
                variant: "outline-light",
                className: "bogie",
                title: "Bogie",
            };
    }
};
