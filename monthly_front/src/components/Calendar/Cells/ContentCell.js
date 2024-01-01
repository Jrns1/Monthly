import { Image, Heading, Text, Spacer } from "@chakra-ui/react";
import { isSameDay } from "date-fns";
import Cell from "./Cell";

const ContentCell = ({ cell, setSelectedDate }) => {
    const { day, content, isSelected } = cell;

    const handleCellClick = () => {
        setSelectedDate(day);
    };

    let contentComponent = null;
    
    let dateStyle = {};
    
    switch (content.type) {
        case 'text':
            contentComponent = <Text fontSize='xs' m='0 .4rem'> {content.body} </Text>;
            break;

        case 'image':  
            contentComponent = <Image src={`${process.env.PUBLIC_URL}/assets/${content.body}.jpeg`} />;
            dateStyle = {color: 'white', position: 'absolute'};
            break;

        case 'heading':
            contentComponent = <Heading as='h3' size='lg' m='0 .2rem'> {content.body} </Heading>;
            break;
    }

    const targetDay = new Date(2023 , 11, 16);
    let mystyle = {
        // overflow: 'hidden',
    };
    if (isSameDay(day, targetDay)) {
        // mystyle = {
        //     w: '200%',
        //     h: '200',
            
        //     bg:'blue.400',
        //     borderRadius: '50%',
        //     display: 'flex',
        //     alignItems:'center',
        //     justifyContent:'center',
        //     color:'white',
        //     fontWeight:'bold',
        // };

        mystyle = {
            position: 'relative',
            // w: '300%',
            // h: '300%',
            // top: '-50%',
            // left: '-50%',
        };
    }

    return (
        <Cell variant='cell' style={mystyle}
        onClick={handleCellClick}>

                    <Text variant='date' style={dateStyle}>  
                        {day.getDate()}
                    </Text>

                    <Spacer />

                    {contentComponent}

                    <Spacer />
                    

        </Cell>
    );
}

export default ContentCell;