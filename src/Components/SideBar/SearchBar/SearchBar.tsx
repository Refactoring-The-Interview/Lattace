import { Form } from "react-bootstrap";

import { Filters } from "../Filters/Filters";
import "./SearchBarS.scss";

export const SearchBar = () => {
    return (
        <div className="SearchBar">
            <Form>
                <label>
                    🔎
                    <input placeholder="Search By Keyword" className="input" />
                </label>
            </Form>
            <Filters />
        </div>
    );
};
