import { Dropdown } from "react-bootstrap";

import "./ThreatLevelDropdownS.scss";
import { ThreatLevel } from "../../../Context/types";

interface Props {
    btnName: string;
    variant: string;
    threatLevel: ThreatLevel;
    setThreatLevel(value: ThreatLevel): void;
}

export const ThreatLevelDropdown = ({
    btnName,
    variant,
    setThreatLevel,
}: Props) => {
    return (
        <Dropdown
            className="ThreatLevel"
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
