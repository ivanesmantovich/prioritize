import CardContainer from "./CardContainer";
import ColumnTitle from "./ColumnTitle";

export default function ColumnContainer() {
    return (
        <div className="column-container grow-0 w-80 min-h-[40px] mr-5 p-2 rounded-lg">
            <ColumnTitle title="Priority Zero" />
            <CardContainer text="First to-do" />
            <CardContainer text="Second to-do" />
            <CardContainer text="Third to-do" />
        </div>
    )
}