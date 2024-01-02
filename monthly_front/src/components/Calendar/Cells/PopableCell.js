import { Box, GridItem, useStyleConfig } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { isSameDay } from "date-fns";
import ContentCell from "./ContentCell";
import BlankCell from "./BlankCell";
import TodayCell from "./TodayCell";
import ScrollablePopup from "./ScrollablePopup";

function PopableCell({ cell }) {

    const [isHovered, setIsHovered] = useState(false);
    const isPopedUp = isHovered && cell.content !== null;
    const popupRef = useRef(null);

    const handleMouseLeave = () => {
        // popupRef.current.scrollTo({top: 0, behavior: 'smooth'});
        popupRef.current.scrollTop = 0;
        setIsHovered(false);
    };

    const cellBody = getCellBody(cell);

    return <GridItem w='full' h='full' position='relative'>
        <ScrollablePopup 
        variant={isPopedUp ? 'popup' : 'celled'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        ref={popupRef}>

            { cellBody }

        </ScrollablePopup>
    </GridItem>;
};


function getCellBody (cell) {
    if (isSameDay(cell.day, new Date(2023, 11, 28)))
        return <TodayCell cell={cell} />;
    else if (cell.content === null)
        return <BlankCell cell={cell} />;
    else
        return <ContentCell cell={cell} />;
}


export default PopableCell;