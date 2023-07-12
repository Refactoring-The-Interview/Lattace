import { MarkerOptionProps, ThreatLevel } from "../Components/Context/types";
import { CamControls } from "../Components/Context/useCamControls";
import {
    angelJetElement,
    banditJetElement,
} from "../Components/MarkerElements/MarkerAirCraft";

export const airCraftPopulation = (camControls: CamControls) => {
    let { lng, lat } = camControls;

    const airFelid: MarkerOptionProps[] = [
        {
            icon: angelJetElement(1),
            GPS: [lat, lng],
            id: 1,
            offset: [0.04, -0.06],
            threatLevel: ThreatLevel.ANGEL,
            rotation: 90,
        },
        {
            icon: angelJetElement(2),
            GPS: [lat, lng],
            id: 2,
            offset: [0.08, -0.1],
            threatLevel: ThreatLevel.ANGEL,
            rotation: 90,
        },
        {
            icon: angelJetElement(3),
            GPS: [lat, lng],
            id: 3,
            offset: [0.14, 0.18],
            threatLevel: ThreatLevel.ANGEL,
            rotation: 90,
        },
        {
            icon: banditJetElement(4),
            GPS: [lat, lng],
            id: 4,
            offset: [0.06, -0.06],
            threatLevel: ThreatLevel.BANDIT,
            rotation: 90,
        },
        {
            icon: banditJetElement(5),
            GPS: [lat, lng],
            id: 5,
            offset: [0.1, -0.1],
            threatLevel: ThreatLevel.BANDIT,
            rotation: 90,
        },
        {
            icon: banditJetElement(6),
            GPS: [lat, lng],
            id: 6,
            offset: [0.38, 0.18],
            threatLevel: ThreatLevel.BANDIT,
            rotation: 90,
        },
    ];

    return airFelid;
};
