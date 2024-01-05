import { isSameDay } from "date-fns";
import ContentCell from "./ContentCell";
import BlankCell from "./BlankCell";
import TodayCell from "./TodayCell";

function Cell(props) {
    if (isSameDay(props.cell.day, new Date(2023, 11, 28)))
        return <TodayCell {...props} />;
    else if (props.cell.content === null)
        return <BlankCell {...props} />;
    else
        return <ContentCell {...props} />;
};

export default Cell;