import Cell from "./Cell";

function TodayCell ({ cell, setSelectedDate }) {
    return (
        <Cell
            bg='blue.400'
            borderRadius='50%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            color='white'
            fontWeight='bold'
        >
            {cell.day.getDate()}
        </Cell>
    );
}

export default TodayCell;