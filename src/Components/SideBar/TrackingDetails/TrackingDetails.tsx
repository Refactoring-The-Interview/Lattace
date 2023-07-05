import { useContext } from "react";
import { Button } from "react-bootstrap";
import { MapObjectContext } from "../../Context/MapObjectContext";
import { ThreatLevel } from "../../MapMarker/MarkersTypes";
import { jetElColorUpate } from "../../MarkerElements/MarkerAirCraft";
import { ThreatLevelDropdown } from "./DropdownOptions/DropdownOptions";
import "./TrackingDetailsS.scss";

const getBtnAttributes = (threatLevel: ThreatLevel) => {
    switch (threatLevel) {
        case ThreatLevel.ANGEL:
            return {
                variant: "outline-primary",
                className: "angel",
                title: "Angel",
            };
        case ThreatLevel.BANDIT:
            return {
                variant: "outline-danger",
                className: "bandit",
                title: "Bandit",
            };
        case ThreatLevel.BOGIE:
        default:
            return {
                variant: "outline-light",
                className: "bogie",
                title: "Bogie",
            };
    }
};

export const TrackingDetails = () => {
    const { selectedDetails, setThreatLevel } = useContext(MapObjectContext);

    if (!selectedDetails) return null;

    const { id, threatLevel } = selectedDetails;
    const btnAttributes = getBtnAttributes(threatLevel);
    const setMarkerThreatLevel = (tl: ThreatLevel) => {
        setThreatLevel(id, tl);
        jetElColorUpate(tl, id);
    };

    return (
        <div className="TrackingDetails">
            <div className="slideWindow">
                <div>
                    <h1>
                        <div className={`${btnAttributes.className}`} />
                        <div>
                            {btnAttributes.title} ({id})
                        </div>
                    </h1>
                </div>
                <div>0°, 0°</div>
                <ThreatLevelDropdown
                    btnName={btnAttributes.title}
                    variant={btnAttributes.variant}
                    threatLevel={threatLevel}
                    setThreatLevel={setMarkerThreatLevel}
                />
            </div>

            <div className="details">
                <div className="col">
                    <div>Enviorment</div>
                    <div>Heading</div>
                    <div>Altitude</div>
                    <div>Source</div>
                </div>

                <div className="col">
                    <div>Sensors</div>
                    <div>Time Since Creation</div>
                    <div>Last Updated</div>
                    <div>Estimated Strength</div>
                </div>
            </div>
            <div>
                <div>Show More Properties</div>
                <Button>Cancel Tasking</Button>
            </div>
        </div>
    );
};
