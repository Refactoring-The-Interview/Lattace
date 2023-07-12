import * as turf from "@turf/turf";
import { ThreatLevel } from "../Context/types";

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

export const getCoordsOfNextPoint = (
    firstPoint: number[],
    nextPoint: number[],
    prevXY = { x: 0, y: 0 }
) => {
    const bearing = turf.bearing(firstPoint, nextPoint);
    const distance = turf.distance(firstPoint, nextPoint, {
        units: "miles",
    });

    const xy = {
        x: prevXY.x + distance * 1000 * Math.cos((bearing * Math.PI) / 180),
        y: prevXY.y + distance * 1000 * Math.sin((bearing * Math.PI) / 180),
    };

    return xy;
};
