import { useContext } from "react";
import { MapObjectContext } from "../Components/Context/MapObjectContext";
import {
    MarkerOptionProps,
    ThreatLevel,
} from "../Components/MapMarker/MarkersTypes";
import {
    angelJetElement,
    banditJetElement,
} from "../Components/MarkerElements/MarkerAirCraft";

export const AirCraftPopulation = () => {
    const { camControls } = useContext(MapObjectContext);
    let { lng, lat } = camControls;

    const airFelid: MarkerOptionProps[] = [
        {
            id: 1,
            icon: angelJetElement(1),
            draggable: true,
            GPS: [lng + 0.1, lat - 0.1],
            threatLevel: ThreatLevel.ANGEL,
        },
        {
            icon: angelJetElement(2),
            draggable: true,
            GPS: [lng + 0.1, lat - 0.3],
            id: 2,
            threatLevel: ThreatLevel.ANGEL,
        },
        {
            icon: angelJetElement(3),
            draggable: true,
            GPS: [lng + 0.4, lat - 0.22],
            id: 3,
            threatLevel: ThreatLevel.ANGEL,
        },
        {
            icon: banditJetElement(4),
            draggable: true,
            GPS: [lng + 0.13, lat],
            id: 4,
            threatLevel: ThreatLevel.BANDIT,
        },
        {
            icon: banditJetElement(5),
            draggable: true,
            GPS: [lng + 0.34, lat],
            id: 5,
            threatLevel: ThreatLevel.BANDIT,
        },
        {
            icon: banditJetElement(6),
            draggable: true,
            GPS: [lng + 0.21, lat],
            id: 6,
            threatLevel: ThreatLevel.BANDIT,
        },
    ];

    return airFelid;
};
