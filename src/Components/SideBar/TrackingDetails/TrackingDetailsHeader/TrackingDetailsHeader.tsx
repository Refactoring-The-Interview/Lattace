import { useContext, useEffect } from "react";
import { DecimalCoordsToDeg } from "../../../../Apis/DecimalCoordsToDeg";
import { getTrackDetailsBtnAttributes } from "../../../App/utils";
import { MapObjectContext } from "../../../Context/MapObjectContext";
import { ThreatLevel } from "../../../Context/types";
import { jetElColorUpdate } from "../../../MarkerElements/MarkerAirCraft";
import { ThreatLevelDropdown } from "../ThreatLevelDropdown/ThreatLevelDropdown";
import "./TrackingDetailsHeaderS.scss";

export const TrackingDetailsHeader = () => {
    const { selectedDetails, setThreatLevel, setSelectedDetails, markers } =
        useContext(MapObjectContext);
    const placeholderDetails = {
        GPS: [],
        id: 1,
        threatLevel: ThreatLevel.ANGEL,
    };
    const { id, threatLevel, GPS } = selectedDetails
        ? selectedDetails
        : placeholderDetails;

    const btnAttributes = getTrackDetailsBtnAttributes(threatLevel);
    const coors = DecimalCoordsToDeg(GPS[0], GPS[1]);

    useEffect(() => {
        setSelectedDetails(markers[id - 1]);
    }, [id, markers, setSelectedDetails]);

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
