import { MarkerOptionProps, ThreatLevel } from "../Components/Context/types";
import { CamControls } from "../Components/Context/useCamControls";
import {
    angelJetElement,
    banditJetElement,
} from "../Components/MarkerElements/MarkerAirCraft";

export const airCraftPopulation = (camControls: CamControls) => {
    let { lng, lat } = camControls;

    //todo move icon call into map call, baised of of threat
    const airFelid: MarkerOptionProps[] = [
        {
            id: 1,
            icon: angelJetElement(1),
            draggable: true,
            GPS: [lng + 0.1, lat - 0.1],
            threatLevel: ThreatLevel.ANGEL,
            rotation: 0,
        },
        {
            icon: angelJetElement(2),
            draggable: true,
            GPS: [lng + 0.1, lat - 0.3],
            id: 2,
            threatLevel: ThreatLevel.ANGEL,
            rotation: 0,
        },
        {
            icon: angelJetElement(3),
            draggable: true,
            GPS: [lng + 0.4, lat - 0.22],
            id: 3,
            threatLevel: ThreatLevel.ANGEL,
            rotation: 0,
        },
        {
            icon: banditJetElement(4),
            draggable: true,
            GPS: [lng + 0.13, lat],
            id: 4,
            threatLevel: ThreatLevel.BANDIT,
            rotation: 0,
        },
        {
            icon: banditJetElement(5),
            draggable: true,
            GPS: [lng + 0.34, lat],
            id: 5,
            threatLevel: ThreatLevel.BANDIT,
            rotation: 0,
        },
        {
            icon: banditJetElement(6),
            draggable: true,
            GPS: [lng + 0.21, lat],
            id: 6,
            threatLevel: ThreatLevel.BANDIT,
            rotation: 0,
        },
    ];

    return airFelid;
};
