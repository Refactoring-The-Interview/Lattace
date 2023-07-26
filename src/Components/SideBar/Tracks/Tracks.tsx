import { useContext, useEffect, useState } from "react";
import { MapObjectContext } from "../../Context/MapObjectContext";
import { DecimalCoordsToDeg } from "../../../Apis/DecimalCoordsToDeg";
import { MarkerOptionProps } from "../../Context/types";
import { SearchBar } from "../SearchBar/SearchBar";
import "./TracksS.scss";

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
                    { icon, id, GPS, newMarker, threatLevel, rotation }: any,
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
                                    <div>
                                        {Math.round(rotation / 10) * 10}°{" "}
                                    </div>

                                    <div>1200 m</div>
                                    <div>1000 m/s</div>
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
};
