import { Text } from "@chakra-ui/react";
import Cell from "./Cell";

function NullCell ({ cell, setSelectedDate }) {
    return (
        <Cell>
            <Text variant='date' color='gray.200'> 
                {cell.day.getDate()} 
            </Text>
        </Cell>
    );
}

export default NullCell;