import { Image, Heading, Text, Spacer, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import ScrollablePopup from "./ScrollablePopup";

const ContentCell = ({ cell, selectedDate, setSelectedDate }) => {
    const { day, content } = cell;
    const [isHovered, setIsHovered] = useState(false);

    let dateStyle = {};
    let contentComponent = null;
    switch (content.thumbType) {
        case 'text':
            contentComponent = <Text w='6.2rem' boxSizing='border-box' fontSize='xs' m='0 .4rem'> {content.thumbnail} </Text>;
            break;

        case 'image':  
            contentComponent = <Image src={`${process.env.PUBLIC_URL}/assets/${content.thumbnail}.jpeg`} />;
            dateStyle = {color: 'white', position: 'absolute'};
            break;

        case 'heading':
            contentComponent = <Heading w='6.6rem' as='h3' size='lg' m='0 .2rem'> {content.thumbnail} </Heading>;
            break;

        default:
            break;
    }

    return (
        <ScrollablePopup
        popup={isHovered && !selectedDate}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>

            <Flex w='full' aspectRatio='auto 1/1' flexDir='column'>
                <Text variant='date' style={dateStyle}> {day.getDate()} </Text>
                <Spacer />
                {contentComponent}
                <Spacer />
            </Flex>


            <Box fontSize='xs' m='3rem 2rem' dangerouslySetInnerHTML={{ __html: content.body }} />

        </ScrollablePopup>
    );
}

export default ContentCell;