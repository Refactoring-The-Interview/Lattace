import { useContext } from "react";
import { MapObjectContext } from "../../Context/MapObjectContext";
import "./TrackingDetailsS.scss";

export const TrackingDetails = () => {
    const { selectedDetails } = useContext(MapObjectContext);

    if (!selectedDetails) return <></>;

    return (
        <div className="TrackingDetails">
            <h1>hello</h1>
        </div>
    );
};
