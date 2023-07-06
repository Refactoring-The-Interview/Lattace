import { useContext, useState } from "react";
import { trackingDetails } from "../../../Apis/TrackingDetailsPopulation";
import { MapObjectContext } from "../../Context/MapObjectContext";
import { TrackingDetail } from "./TrackingDetail/TrackingDetail";
import { TrackingDetailsFooter } from "./TrackingDetailsFooter/TrackingDetailsFooter";
import { TrackingDetailsHeader } from "./TrackingDetailsHeader/TrackingDetailsHeader";
import "./TrackingDetailsS.scss";

export const TrackingDetails = () => {
    const { selectedDetails } = useContext(MapObjectContext);
    const [show, setShow] = useState<boolean>(false);

    if (!selectedDetails) return null;

    return (
        <div className="TrackingDetails">
            <TrackingDetailsHeader />

            {show && (
                <div className="detailsBody">
                    {trackingDetails.map(({ title, value }) => {
                        return <TrackingDetail title={title} value={value} />;
                    })}
                </div>
            )}

            <TrackingDetailsFooter show={show} setShow={setShow} />
        </div>
    );
};
