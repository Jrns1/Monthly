import { useStyleConfig, GridItem, Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

function ScorllablePopup({popup, children, ...rest}) {
    const styles = useStyleConfig("ScrollablePopup", { variant: popup ? 'popup' : 'celled' } );
    const popupRef = useRef(null);

    useEffect(() => {
        // popupRef.current.scrollTo({top: 0, behavior: 'smooth'});
        if (!popup)
            popupRef.current.scrollTop = 0; 
    }, [popup]);

    return <GridItem w='full' h='full' position='relative'>
        <Box __css={styles} ref={popupRef} {...rest}>
            {children}
        </Box>
    </GridItem>;
;};

export default ScorllablePopup;