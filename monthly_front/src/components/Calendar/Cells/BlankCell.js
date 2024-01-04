import { Text } from "@chakra-ui/react";
import ScorllablePopup from "./ScrollablePopup";

function BlankCell ({ cell }) {
    return (
        <ScorllablePopup popup={false}>
            <Text variant='date' color='gray.200'> 
                {cell.day.getDate()} 
            </Text>
        </ScorllablePopup>
);
}

export default BlankCell;