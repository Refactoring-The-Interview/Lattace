import { useContext, useEffect, useState } from "react";
import { MapObjectContext } from "../../Context/MapObjectContext";

import { SearchBar } from "../SearchBar/SearchBar";
import "./TracksS.scss";
import { MarkerOptionProps } from "../../Context/types";

export const Tracks = () => {
    const { markers, setSelectedDetails } = useContext(MapObjectContext);
    const [currentMarkers, setCurrentMarkers] =
        useState<MarkerOptionProps[]>(markers);

    useEffect(() => {
        setCurrentMarkers(markers);
    }, [currentMarkers, markers]);

    return (
        <div className="Tracks">
            <div>
                <SearchBar setCurrentMarkers={setCurrentMarkers} />
            </div>
            {markers.length} Tracks
            <div className="track-header">
                <div>Hostile</div>
                <div>3</div>
            </div>
            {currentMarkers.map(
                (
                    { icon, id, GPS, newMarker, threatLevel }: any,
                    index: number
                ) => {
                    const isBandit = threatLevel === 0 ? "bandit" : "angel";
                    return (
                        <div
                            className="banner"
                            key={index}
                            onClick={() => {
                                setSelectedDetails(markers[index]);
                            }}
                        >
                            <span className={`${isBandit} shape`}></span>
                            <div className="target">
                                <div className={`track`}>
                                    {isBandit} ( {id} )
                                </div>
                                <div className="target-info">
                                    <div>0° </div>
                                    <div>0 m</div>
                                    <div>0 m/s</div>
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
};
