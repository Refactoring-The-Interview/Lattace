import { Form } from "react-bootstrap";

import { useContext, useEffect, useState } from "react";
import { MapObjectContext } from "../../Context/MapObjectContext";
import { MarkerOptionProps } from "../../MapMarker/MarkersTypes";
import { Filters } from "../Filters/Filters";
import "./SearchBarS.scss";

interface Props {
    setCurrentMarkers(newMarkers: MarkerOptionProps[]): void;
}

export const SearchBar = ({ setCurrentMarkers }: Props) => {
    const { markers } = useContext(MapObjectContext);

    const [filterInput, setFilterInput] = useState<string>("");

    useEffect(() => {
        const filterKeyword = markers.filter((marker: MarkerOptionProps) => {
            const input = filterInput.toLowerCase();
            return (
                !marker.id.toString().indexOf(input) ||
                !marker.icon.className.indexOf(input) ||
                !marker.GPS[0].toString().indexOf(input) ||
                !marker.GPS[1].toString().indexOf(input)
            );
        });

        setCurrentMarkers(filterKeyword);
    }, [filterInput]);

    return (
        <div className="SearchBar">
            <Form>
                <label>
                    🔎
                    <input
                        placeholder="Search By Keyword"
                        className="input"
                        value={filterInput}
                        onChange={(input) => {
                            setFilterInput(input.target.value);
                        }}
                    />
                </label>
            </Form>
            <Filters />
        </div>
    );
};
