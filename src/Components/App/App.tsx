import { MapObjectContextProvider } from "../Context/MapObjectContext";
import { Map } from "../Map/Map";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <MapObjectContextProvider>
                <Map />
            </MapObjectContextProvider>
        </div>
    );
};
