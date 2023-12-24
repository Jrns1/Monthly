import { GridItem } from "@chakra-ui/react";

const Today = ({ cell }) => {
    return (
        <GridItem
            w='100%'
            h='100%'
            bg='blue.400'
            borderRadius='50%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            color='white'
            fontWeight='bold'
        >
            {cell.day.getDate()}
        </GridItem>
    );
}

export default Today;