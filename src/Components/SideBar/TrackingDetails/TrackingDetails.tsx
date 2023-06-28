import { useRef } from "react";
import { Overlay } from "react-bootstrap";
import "./TrackingDetailsS.scss";

export const TrackingDetails = () => {
    const target = useRef(null);

    return (
        <span className="TrackingDetails">
            <Overlay target={target.current} show={true} placement="left">
                {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                }) => <div {...props}>Simple tooltip</div>}
            </Overlay>
        </span>
    );
};
