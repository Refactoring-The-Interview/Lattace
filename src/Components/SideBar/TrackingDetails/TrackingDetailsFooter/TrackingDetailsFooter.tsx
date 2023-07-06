import { useContext } from "react";
import { Button } from "react-bootstrap";
import { MapObjectContext } from "../../../Context/MapObjectContext";
import "./TrackingDetailsFooterS.scss";

interface Props {
    show: boolean;
    setShow(show: boolean): void;
}

export const TrackingDetailsFooter = ({ show, setShow }: Props) => {
    const { setSelectedDetails } = useContext(MapObjectContext);

    return (
        <div className="DetailsFooter">
            <div
                className="moreBtn"
                onClick={() => {
                    setShow(!show);
                }}
            >
                <div className="line" />
                <div className="title">Show More Properties</div>
                <div className="line" />
            </div>
            <Button
                variant="secondary"
                onClick={() => {
                    setSelectedDetails(null);
                }}
            >
                Cancel Tasking
            </Button>
        </div>
    );
};
