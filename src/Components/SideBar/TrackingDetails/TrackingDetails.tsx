import { useContext, useState } from "react";
import { MapObjectContext } from "../../Context/MapObjectContext";
import { TrackingDetailsBody } from "./TrackingDetailsBody/TrackingDetailsBody";
import { TrackingDetailsFooter } from "./TrackingDetailsFooter/TrackingDetailsFooter";
import { TrackingDetailsHeader } from "./TrackingDetailsHeader/TrackingDetailsHeader";
import "./TrackingDetailsS.scss";

export const TrackingDetails = () => {
    const { selectedDetails } = useContext(MapObjectContext);
    const [show, setShow] = useState<boolean>(true);

    if (!selectedDetails) return null;

    return (
        <div className="TrackingDetails">
            <TrackingDetailsHeader />
            <TrackingDetailsBody />
            <TrackingDetailsFooter show={show} setShow={setShow} />
        </div>
    );
};
