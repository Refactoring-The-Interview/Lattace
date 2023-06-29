import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { MapObjectContext } from "../../Context/MapObjectContext";
import { DropdownOptions } from "./DropdownOptions/DropdownOptions";
import "./TrackingDetailsS.scss";

export enum Options {
    bandit = "outline-danger",
    angel = "outline-primary",
    bogie = "outline-light",
}

export const TrackingDetails = () => {
    const { selectedDetails, markers } = useContext(MapObjectContext);

    const { icon, GPS, id, newMarker } = selectedDetails || markers;
    const isBandit = icon?.className?.indexOf("bandit") ? "angel" : "bandit";
    const [btnColor, setBtnColor] = useState<Options>(Options[isBandit]);

    if (!selectedDetails) return <></>;
    return (
        <div className="TrackingDetails">
            <div className="slideWindow">
                <div>
                    <h1>
                        <div className={`${isBandit}`} />
                        <div>
                            {isBandit} ({id})
                        </div>
                    </h1>
                </div>
                <div>0°, 0°</div>
                <DropdownOptions value={btnColor} setValue={setBtnColor} />
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
