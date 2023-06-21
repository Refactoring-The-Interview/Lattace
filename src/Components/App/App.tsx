import { MapObjectContextProvider } from "../Context/MapObjectContext";
import { Map } from "../Map/Map";
import { SideBar } from "../SideBar/SideBar";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <MapObjectContextProvider>
                <SideBar />
                <Map />
            </MapObjectContextProvider>
        </div>
    );
};
