import ScorllablePopup from "./ScrollablePopup";

function TodayCell ({ cell, selectedDate, setSelectedDate }) {
    return (
        <ScorllablePopup
            bg='blue.400'
            borderRadius='50%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            color='white'
            fontWeight='bold'
        >
            {cell.day.getDate()}
        </ScorllablePopup>
    );
}

export default TodayCell;