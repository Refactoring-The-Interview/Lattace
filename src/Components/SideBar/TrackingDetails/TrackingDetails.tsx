import { useContext } from "react";
import { Button } from "react-bootstrap";
import { trackingDetails } from "../../../Apis/TrackingDetailsPopulation";
import { MapObjectContext } from "../../Context/MapObjectContext";
import { TrackingDetail } from "./TrackingDetail/TrackingDetail";
import { TrackingDetailsHeader } from "./TrackingDetailsHeader/TrackingDetailsHeader";
import "./TrackingDetailsS.scss";

export const TrackingDetails = () => {
    const { selectedDetails } = useContext(MapObjectContext);

    if (!selectedDetails) return null;

    return (
        <div className="TrackingDetails">
            <TrackingDetailsHeader />

            <div className="detailsBody">
                {trackingDetails.map(({ title, value }) => {
                    return <TrackingDetail title={title} value={value} />;
                })}
            </div>

            <div className="detailsFooter">
                <div>Show More Properties</div>
                <Button variant="secondary">Cancel Tasking</Button>
            </div>
        </div>
    );
};
