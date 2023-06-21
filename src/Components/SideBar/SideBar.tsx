import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import "./SideBarS.scss";

export const SideBar = () => {
    return (
        <div className="SideBar">
            <NavBar />
            <SearchBar />
        </div>
    );
};
