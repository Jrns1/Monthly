import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import Cell from './Cells/Cell';
import NullCell from './Cells/NullCell';
import Today from './Cells/Today';
import { Grid } from '@chakra-ui/react';

const CalendarCells = ({ currentMonth, selectedDate, setSelectedDate, contents }) => {
    const [calendarCells, setCalendarCells] = useState([]);

    useEffect(() => {
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
    }, [currentMonth, selectedDate]);

    const instantiate = (cell, index) => {
        if (!isSameMonth(cell.day, currentMonth))
            return <NullCell key={index}/>;
        else if (isSameDay(cell.day, new Date()))
            return <Today key={index} cell={cell} setSelectedDate={selectedDate}/>;
        else if (cell.content === null)
            return <NullCell key={index}/>;
        else
            return <Cell key={index} cell={cell} setSelectedDate={setSelectedDate}/>;
    }

    return (
        <Grid h='95vh' aspectRatio='auto 7/6' templateColumns='repeat(7, 1fr)'>
            {calendarCells.map(instantiate)}
        </Grid>
    );
}

export default CalendarCells;