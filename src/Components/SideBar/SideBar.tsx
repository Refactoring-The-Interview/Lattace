import { useContext } from "react";
import { MyMapObjectContext } from "../Context/MapObjectContext";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import "./SideBarS.scss";

export const SideBar = () => {
    const { map } = useContext(MyMapObjectContext);

    console.log(map, "in filter");
    return (
        <div className="SideBar">
            <NavBar />
            <SearchBar />
        </div>
    );
};
