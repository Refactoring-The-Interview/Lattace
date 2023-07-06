import { decimalToSexagesimal } from "geolib";

export const DecimalCoordsToDeg = (lat: number, lng: number) => {
    const coors = [];
    coors.push(decimalToSexagesimal(lat));
    coors.push(decimalToSexagesimal(lng));
    return coors;
};
