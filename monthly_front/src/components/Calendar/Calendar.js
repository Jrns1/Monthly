import { useState } from 'react';
import CalendarCells from './CalendarCells';
import { Box } from '@chakra-ui/react';
import dummyContents from './dummyContents.js';


const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <Box>
            <CalendarCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                contents={dummyContents.map(s => s.body === '' ? { type: 'null', content: null } : s)}
            />
        </Box>
    );
};

export default Calendar;