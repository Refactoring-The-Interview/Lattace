import { useContext } from "react";
import { trackingDetails } from "../../../../Apis/TrackingDetailsPopulation";
import { MapObjectContext } from "../../../Context/MapObjectContext";
import { TrackingDetail } from "../TrackingDetail/TrackingDetail";
import "./TrackingDetailsBodyS.scss";

export const TrackingDetailsBody = () => {
    const { selectedDetails } = useContext(MapObjectContext);

    return (
        <div>
            <div className="detailsBody">
                {trackingDetails.map(({ title, value }: any) => {
                    return <TrackingDetail title={title} value={value} />;
                })}
            </div>
        </div>
    );
};
