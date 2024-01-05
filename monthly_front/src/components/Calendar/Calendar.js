import { useEffect, useState } from 'react';
import CalendarCells from './CalendarCells';
import { Box } from '@chakra-ui/react';
import dummyContents from './dummyContents.js';


function Calendar () {
    const [currentMonth, setCurrentMonth] = useState(new Date(2023, 11, 25));
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        setSelectedDate(null);
    }, [currentMonth]);

    useEffect(() => {
        console.log(selectedDate);
    }, [selectedDate]);

    return (
        <Box w='49rem'>
            <CalendarCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                contents={dummyContents}
            />
        </Box>
    );
};

export default Calendar;