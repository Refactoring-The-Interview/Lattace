import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Options } from "../TrackingDetails";

interface Props {
    value: Options;
    setValue(value: Options): void;
}

export const DropdownOptions = ({ value, setValue }: Props) => {
    const [btnName, setBtnName] = useState<string | null>("hostile");
    return (
        <Dropdown
            onSelect={(name) => {
                setBtnName(name);
            }}
        >
            <Dropdown.Toggle variant={value} id="dropdown-basic">
                <h5>{btnName}</h5>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item
                    eventKey={"Hostile"}
                    onClick={(e) => {
                        setValue(Options.bandit);
                    }}
                >
                    Hostile
                </Dropdown.Item>
                <Dropdown.Item
                    eventKey={"Friendly"}
                    onClick={(e) => {
                        setValue(Options.angel);
                    }}
                >
                    Friendly
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
