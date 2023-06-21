import { Map } from "../Map/Map";
import { SideBar } from "../SideBar/SideBar";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <SideBar />
            <Map />
        </div>
    );
};
