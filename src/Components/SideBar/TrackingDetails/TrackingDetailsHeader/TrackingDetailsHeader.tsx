import { useContext } from "react";
import { DecimalCoordsToDeg } from "../../../../Apis/DecimalCoordsToDeg";
import { getTrackDetailsBtnAttributes } from "../../../../Apis/utils";
import { MapObjectContext } from "../../../Context/MapObjectContext";

import { jetElColorUpdate } from "../../../MarkerElements/MarkerAirCraft";
import { ThreatLevelDropdown } from "../ThreatLevelDropdown/ThreatLevelDropdown";
import "./TrackingDetailsHeaderS.scss";
import { ThreatLevel } from "../../../Context/types";

export const TrackingDetailsHeader = () => {
    const { selectedDetails, setThreatLevel } = useContext(MapObjectContext);
    if (!selectedDetails) return null;

    const { id, threatLevel, GPS } = selectedDetails;
    const coors = DecimalCoordsToDeg(GPS[0], GPS[1]);
    const btnAttributes = getTrackDetailsBtnAttributes(threatLevel);

    const setMarkerThreatLevel = (tl: ThreatLevel) => {
        setThreatLevel(id, tl);
        jetElColorUpdate(tl, id);
    };

    return (
        <div className="DetailsHeader">
            <h1 className="name">
                <div className={`${btnAttributes.className} shape`} />
                <div>
                    {btnAttributes.title} ({id})
                </div>
            </h1>

            <div>
                <div className="coors">
                    <div className="lat">{coors[0]},</div>
                    <div className="lng">{coors[1]}</div>
                </div>
                <ThreatLevelDropdown
                    btnName={btnAttributes.title}
                    variant={btnAttributes.variant}
                    threatLevel={threatLevel}
                    setThreatLevel={setMarkerThreatLevel}
                />
            </div>
        </div>
    );
};
