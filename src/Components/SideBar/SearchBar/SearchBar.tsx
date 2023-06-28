import { Form } from "react-bootstrap";

import { useContext, useEffect, useState } from "react";
import { MapObjectContext } from "../../Context/MapObjectContext";
import { MarkerOptionProps } from "../../MapMarker/MarkersTypes";
import { Filters } from "../Filters/Filters";
import "./SearchBarS.scss";

export const SearchBar = () => {
    const { markers, setFilteredMarkers } = useContext(MapObjectContext);

    const [filterInput, setFilterInput] = useState<string>("");

    useEffect(() => {
        const filterKeyword = markers.filter((marker: MarkerOptionProps) => {
            return (
                !marker.id.toString().indexOf(filterInput) ||
                !marker.icon.className.indexOf(filterInput) ||
                !marker.GPS[0].toString().indexOf(filterInput) ||
                !marker.GPS[1].toString().indexOf(filterInput)
            );
        });
        setFilteredMarkers(filterKeyword);
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
