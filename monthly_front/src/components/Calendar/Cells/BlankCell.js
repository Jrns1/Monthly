import { Text, Box, Fade } from "@chakra-ui/react";
import ScorllablePopup from "./ScrollablePopup";
import { isSameDay } from "date-fns";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useState, useRef } from "react";
import useBackClick from "../../../hooks/useBackClick";

function BlankCell ({ cell, selectedDate, setSelectedDate }) {
    const editor = useBlockNote();
    const [isHovered, setIsHovered] = useState(false);
    const editorRef = useRef(null);
    useBackClick(() => setSelectedDate(null), editorRef);

    function handleMouseClick() {
        if (!isSameDay(cell.day, selectedDate))
            setSelectedDate(cell.day);
    }

    const popup = isSameDay(cell.day, selectedDate);
    const dateColor = isHovered ? 'gray.400':'gray.200';
    
    return (
        <ScorllablePopup 
        popup={popup} 
        onClick={handleMouseClick}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}>

            {!popup && <Text variant='date' color={dateColor}> {cell.day.getDate()} </Text>}
            
            { popup &&
                <Box w='full' h='full' p='2rem 0' ref={editorRef}>
                    <BlockNoteView width='100%' height='100%' theme={'light'} editor={editor} />
                </Box>
            }

        </ScorllablePopup>
);
}

export default BlankCell;