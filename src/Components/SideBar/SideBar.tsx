import { NavBar } from "./NavBar/NavBar";
import "./SideBarS.scss";
import { Tracks } from "./Tracks/Tracks";

export const SideBar = () => {
    return (
        <div className="SideBar">
            <NavBar />
            <Tracks />
        </div>
    );
};
