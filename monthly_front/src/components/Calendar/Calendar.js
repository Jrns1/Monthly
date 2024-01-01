import { useState } from 'react';
import CalendarCells from './CalendarCells';
import { Box } from '@chakra-ui/react';
import dummyContents from './dummyContents.js';


function Calendar () {
    const [currentMonth, setCurrentMonth] = useState(new Date(2023, 11, 25));
    const [selectedDate, setSelectedDate] = useState(new Date(2023, 11, 25));
    

    return (
        <Box w='49rem'>
            <CalendarCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                setSelectedDate={setCurrentMonth}
                contents={dummyContents}
            />
        </Box>
    );
};

export default Calendar;