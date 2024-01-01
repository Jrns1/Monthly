import { Image, Heading, Text, Spacer, Box } from "@chakra-ui/react";
import Cell from "./Cell";
import { useState, useRef } from "react";


const ContentCell = ({ cell, setSelectedDate }) => {
    const { day, content, isSelected } = cell;

    const [isHovered, setIsHovered] = useState(false);
    const popupRef = useRef(null);

    const handleMouseLeave = () => {
        popupRef.current.scrollTop = 0;
        setIsHovered(false);
    }

    let dateStyle = {};
    let contentComponent = null;
    switch (content.type) {
        case 'text':
            contentComponent = <Text fontSize='xs' m='0 .4rem'> {content.body} </Text>;
            break;

        case 'image':  
            contentComponent = <>
            <Image src={`${process.env.PUBLIC_URL}/assets/${content.body}.jpeg`} />

            <Text fontSize='xs' m='2rem 2rem'> 
            야조회를 나가지 않아서. 내가 나라서. 나를 불러다 뱅쇼를 끓여주는 사람이 있어서. 한결같이 웃는 사람이 있어서. 뱅쇼도 마시면 취해서. 그런 것들을 고맙게 생각할 줄 알아서. 
            <br/><br/>
            슈톨렌에 뱅쇼, <br/>
            박준에 허회경. <br/>
            불러줘서 고마워<br/>
            <br/>
            그렇게 방명록에 적어두었다. 유독 미숙하고 어린 학기였다 싶다가도, 뱅쇼 한 잔에 죄다 녹아버리고 잘 살았다 싶은 생각만 든다. 이 사람들을 만나고 그런 문장을 적은 적이 있었다. “만나고 나면 어딘가 든든해지는 사람들이 있다.” 왜 그런 마음이 차오를까 물으려다 만다. 감정에는 정말로 이유가 없는 거야. 민주 누나가 그렇게 말했었다. <br/>
            <br/> 이유를 묻다가 까먹는 것들이 생기기 마련이니까.
            </Text>

            </>;
            dateStyle = {color: 'white', position: 'absolute'};
            break;

        case 'heading':
            contentComponent = <Heading as='h3' size='lg' m='0 .2rem'> {content.body} </Heading>;
            break;
    }

    return (
        <Cell 
        variant={isHovered ? 'popup' : 'celled'}
        onMouseEnter={() => {setIsHovered(true); console.log("HOVERD")}}
        onMouseLeave={handleMouseLeave}
        ref={popupRef}>

            <Text variant='date' style={dateStyle}> {day.getDate()} </Text>
            <Spacer />
            {contentComponent}
            <Spacer />


                    
        </Cell>
    );
}

export default ContentCell;