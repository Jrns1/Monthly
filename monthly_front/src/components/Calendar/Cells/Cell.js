import { Box, GridItem, useStyleConfig } from "@chakra-ui/react";
import { forwardRef } from "react";


const Cell = forwardRef((props, ref) => {
    const { variant, children, ...rest } = props;
    const styles = useStyleConfig("Cell", { variant });


    return <GridItem w='full' h='full' position='relative'>
        <Box 
        __css={styles} 
        ref={ref}
        {...rest}>

            {children}

        </Box>
    </GridItem>;
});

export default Cell;