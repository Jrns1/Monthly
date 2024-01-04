import { isSameDay } from "date-fns";
import ContentCell from "./ContentCell";
import BlankCell from "./BlankCell";
import TodayCell from "./TodayCell";

function Cell({ cell }) {
    if (isSameDay(cell.day, new Date(2023, 11, 28)))
        return <TodayCell cell={cell} />;
    else if (cell.content === null)
        return <BlankCell cell={cell} />;
    else
        return <ContentCell cell={cell} />;
};

export default Cell;