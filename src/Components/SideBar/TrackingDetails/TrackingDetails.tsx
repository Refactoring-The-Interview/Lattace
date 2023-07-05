import { useContext } from "react";
import { Button } from "react-bootstrap";
import { MapObjectContext } from "../../Context/MapObjectContext";
import { ThreatLevel } from "../../MapMarker/MarkersTypes";
import { jetElColorUpdate } from "../../MarkerElements/MarkerAirCraft";

import { getTrackDetailsBtnAttributes } from "../../../Apis/utils";

import { trackingDetails } from "../../../Apis/TrackingDetailsPopulation";
import { ThreatLevelDropdown } from "./DropdownOptions/DropdownOptions";
import { TrackingDetail } from "./TrackingDetail/TrackingDetail";
import "./TrackingDetailsS.scss";

export const TrackingDetails = () => {
    const { selectedDetails, setThreatLevel } = useContext(MapObjectContext);

    if (!selectedDetails) return null;

    const { id, threatLevel } = selectedDetails;
    const btnAttributes = getTrackDetailsBtnAttributes(threatLevel);

    const setMarkerThreatLevel = (tl: ThreatLevel) => {
        setThreatLevel(id, tl);
        jetElColorUpdate(tl, id);
    };

    return (
        <div className="TrackingDetails">
            <div className="detailsHeader">
                <h1>
                    <div className={`${btnAttributes.className}`} />
                    <div>
                        {btnAttributes.title} ({id})
                    </div>
                </h1>

                <div>
                    <div>0°, 0°</div>
                    <ThreatLevelDropdown
                        btnName={btnAttributes.title}
                        variant={btnAttributes.variant}
                        threatLevel={threatLevel}
                        setThreatLevel={setMarkerThreatLevel}
                    />
                </div>
            </div>

            <div className="detailsBody">
                {trackingDetails.map(({ title, value }) => {
                    return <TrackingDetail title={title} value={value} />;
                })}
            </div>
            <div>
                <div>Show More Properties</div>
                <Button>Cancel Tasking</Button>
            </div>
        </div>
    );
};
