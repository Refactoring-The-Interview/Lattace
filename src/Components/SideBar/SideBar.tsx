import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import "./SideBarS.scss";
import { Tracks } from "./Tracks/Tracks";

export const SideBar = () => {
    return (
        <div className="SideBar">
            <NavBar />
            <SearchBar />
            <Tracks />
        </div>
    );
};
