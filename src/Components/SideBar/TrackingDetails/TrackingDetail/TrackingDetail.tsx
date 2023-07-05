import "./TrackingDetailS.scss";
import { TrackingDetailProps } from "./TrackingDetailTypes";

export const TrackingDetail = ({ title, value }: TrackingDetailProps) => {
    return (
        <div className="TrackingDetail">
            <label className="title">{title}</label>
            <div className="value">placeholder</div>
        </div>
    );
};
