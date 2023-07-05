import "./TrackingDetailS.scss";
import { TrackingDetailProps } from "./TrackingDetailTypes";

export const TrackingDetail = ({ title, value }: TrackingDetailProps) => {
    console.log(value);
    return (
        <div className="TrackingDetail">
            <label className="title">{title}</label>
            <div className="value">{value}</div>
        </div>
    );
};
