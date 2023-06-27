import { useContext } from "react";
import { MapObjectContext } from "../Context/MapObjectContext";
import { MarkerOptionProps } from "../MapMarker/MarkersTypes";
import {
    FriendlyJetElement,
    banditJetElement,
} from "../MarkerElements/MarkerAirCraft";

export const AirCraftPopulation = () => {
    const { camControls } = useContext(MapObjectContext);
    let { lng, lat } = camControls;

    const airFelid: MarkerOptionProps[] = [
        {
            icon: FriendlyJetElement(),
            draggable: true,
            GPS: [lng + 0.1, lat - 0.1],
            id: 1,
        },
        {
            icon: FriendlyJetElement(),
            draggable: true,
            GPS: [lng + 0.1, lat - 0.3],
            id: 2,
        },
        {
            icon: FriendlyJetElement(),
            draggable: true,
            GPS: [lng + 0.4, lat - 0.22],
            id: 3,
        },
        {
            icon: banditJetElement(),
            draggable: true,
            GPS: [lng + 0.13, lat],
            id: 4,
        },
        {
            icon: banditJetElement(),
            draggable: true,
            GPS: [lng + 0.34, lat],
            id: 5,
        },
        {
            icon: banditJetElement(),
            draggable: true,
            GPS: [lng + 0.21, lat],
            id: 6,
        },
    ];

    return airFelid;
};
