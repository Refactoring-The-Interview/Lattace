import { Dropdown } from "react-bootstrap";
import { ThreatLevel } from "../../../MapMarker/MarkersTypes";

interface Props {
    btnName: string;
    variant: string;
    threatLevel: ThreatLevel;
    setThreatLevel(value: ThreatLevel): void;
}

export const ThreatLevelDropdown = ({
    btnName,
    variant,
    threatLevel,
    setThreatLevel,
}: Props) => {
    return (
        <Dropdown
            onSelect={(key) => {
                setThreatLevel(parseInt(key || "0") as ThreatLevel);
            }}
        >
            <Dropdown.Toggle variant={variant} id="dropdown-basic">
                <h5>{btnName}</h5>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey={ThreatLevel.BANDIT}>
                    Hostile
                </Dropdown.Item>
                <Dropdown.Item eventKey={ThreatLevel.ANGEL}>
                    Friendly
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
