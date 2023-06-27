import { useContext } from "react";
import { MapObjectContext } from "../../Context/MapObjectContext";
import "./TracksS.scss";

export const Tracks = () => {
    const { markers } = useContext(MapObjectContext);

    return (
        <div className="Tracks">
            <div className="track-header">
                <div>Hostel</div>
                <div>3</div>
            </div>
            {markers.map(({ icon, id, GPS, newMarker }: any) => {
                const isBandit = icon.className.includes("bandit")
                    ? "bandit"
                    : "angel";
                return (
                    <div className="banner">
                        <span className={`${isBandit} shape`}></span>
                        <div className="target">
                            <div className={`track`}>
                                {isBandit} ({Math.floor(Math.random() * 1000)})
                            </div>
                            <div className="target-info">
                                <div>0 ° </div>
                                <div>0 n</div>
                                <div>0 m/s</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
