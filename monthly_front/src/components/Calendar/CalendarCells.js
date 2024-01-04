import { startOfMonth, endOfMonth, startOfWeek, isSameMonth, isSameDay, addDays } from 'date-fns';
import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Cell from './Cells/Cell';

function CalendarCells ({ currentMonth, selectedDate, setSelectedDate, contents }) {

    const [calendarCells, setCalendarCells] = useState([]);
    useEffect(instantiateCells, [currentMonth, selectedDate, contents]);

    function instantiateCells () {
        const firstDayOfMonth = startOfMonth(currentMonth);
        const lastDayOfMonth = endOfMonth(firstDayOfMonth);
        const startDate = startOfWeek(firstDayOfMonth);

        const cells = [];
        let day = startDate;
        while (day <= lastDayOfMonth) {
            cells.push({
                day,
                content: contents[day.getDate() - 1],
                isSelected: isSameDay(day, selectedDate),
            });
            day = addDays(day, 1);
        }
    
        setCalendarCells(cells);
    }

    const instantiate = (cell, index) => {
        if (!isSameMonth(cell.day, currentMonth))
            return <GridItem key={index} />;
        else
            return <Cell key={index} cell={cell} />;
    }

    return (
        <Grid w='full' aspectRatio='auto 7/6' templateColumns='repeat(7, 1fr)' templateRows='repeat(6, 1fr)'>
            {calendarCells.map(instantiate)}
        </Grid>
    );
}

export default CalendarCells;