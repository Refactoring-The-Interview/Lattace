import { useContext } from "react";
import { MapObjectContext } from "../../Context/MapObjectContext";
import "./TracksS.scss";

export const Tracks = () => {
    const { markers, filteredMarkers } = useContext(MapObjectContext);

    return (
        <div className="Tracks">
            <div className="track-header">
                <div>Hostel</div>
                <div>3</div>
            </div>
            {filteredMarkers.map(
                ({ icon, id, GPS, newMarker }: any, index: number) => {
                    const isBandit = icon.className.includes("bandit")
                        ? "bandit"
                        : "angel";
                    return (
                        <div className="banner" key={index}>
                            <span className={`${isBandit} shape`}></span>
                            <div className="target">
                                <div className={`track`}>
                                    {isBandit} ({" "}
                                    {Math.floor(Math.random() * 10000)} )
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
