import { startOfMonth, endOfMonth, startOfWeek, isSameMonth, isSameDay, addDays } from 'date-fns';
import { Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ContentCell from './Cells/ContentCell';
import NullCell from './Cells/NullCell';
import SpaceCell from './Cells/SpaceCell';
import TodayCell from './Cells/TodayCell';

function CalendarCells ({ currentMonth, selectedDate, setSelectedDate, contents }) {

    const [calendarCells, setCalendarCells] = useState([]);
    useEffect(instantiateCells, [currentMonth, selectedDate]);

    function instantiateCells () {
        const firstDayOfMonth = startOfMonth(currentMonth);
        const lastDayOfMonth = endOfMonth(firstDayOfMonth);
        const startDate = startOfWeek(firstDayOfMonth);

        const cells = [];
        let day = startDate;
        while (day <= lastDayOfMonth) {
            const content = contents[day.getDate() - 1];
            cells.push({
                day,
                content,
                isSelected: isSameDay(day, selectedDate),
            });
            day = addDays(day, 1);
        }
    
        setCalendarCells(cells);
    }

    const instantiate = (cell, index) => {
        if (!isSameMonth(cell.day, currentMonth))
            return <SpaceCell key={index}/>;
        else if (isSameDay(cell.day, new Date(2023, 11, 28)))
            return <TodayCell key={index} cell={cell} setSelectedDate={setSelectedDate}/>;
        else if (cell.content === null)
            return <NullCell key={index} cell={cell}/>;
        else
            return <ContentCell key={index} cell={cell} setSelectedDate={setSelectedDate}/>;
    }

    return (
        <Grid w='full' aspectRatio='auto 7/6' templateColumns='repeat(7, 1fr)' templateRows='repeat(6, 1fr)'>
            {calendarCells.map(instantiate)}
        </Grid>
    );
}

export default CalendarCells;