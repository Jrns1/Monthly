import { Box } from "@chakra-ui/react";

function TodayCell ({ cell }) {
    return (
        <Box
            w='full'
            h='full'
            bg='blue.400'
            borderRadius='50%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            color='white'
            fontWeight='bold'
        >
            {cell.day.getDate()}
        </Box>
    );
}

export default TodayCell;