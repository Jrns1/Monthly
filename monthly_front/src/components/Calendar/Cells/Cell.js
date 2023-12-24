import { Box, Image, GridItem, Heading, Text, Spacer } from "@chakra-ui/react";

const Cell = ({ cell, setSelectedDate }) => {
    const { day, content, isSelected } = cell;

    const handleCellClick = () => {
        setSelectedDate(day);
    };

    let contentComponent = null;
    let dateColor = 'black';
    let datePosition = 'static';
    let boxShadow = 'xl';
    let boxPadding = '.4rem';
    switch (content.type) {
        case 'text':
            contentComponent = <Text fontSize='sm' m='.4rem'> {content.body} </Text>;
            break;
        case 'image':  
            contentComponent = <Image src={`${process.env.PUBLIC_URL}/assets/${content.body}.jpeg`} 
            
            />;

            dateColor = 'white';
            datePosition = 'absolute';
            boxPadding = '0';
            break;
        case 'heading':
            contentComponent = <Heading as='h3' size='lg' m='0.4rem'> {content.body} </Heading>;
            break;
        case 'null':
            dateColor = 'gray.200';
            boxShadow = 'none';
            break;
    }

    
    return (
        <GridItem 
        position='relative'
        h='full'
        aspectRatio='auto 1/1' 
        onClick={handleCellClick}>
            <Box w='100%' h='100%' boxShadow={boxShadow}>
                <Box position='relative' display='flex' flexDirection='column' zIndex='3'>

                    <Text 
                    color={dateColor} 
                    fontSize='xl'
                    position={datePosition}
                    m='.4rem'
                    > {day.getDate()} </Text>

                    {contentComponent}

                </Box>
            </Box>
        </GridItem>
    );
}

export default Cell;