import { Text } from "@chakra-ui/react";

function BlankCell ({ cell }) {
    return (
        <Text variant='date' color='gray.200'> 
            {cell.day.getDate()} 
        </Text>
);
}

export default BlankCell;