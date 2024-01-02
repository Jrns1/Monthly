import { forwardRef, useStyleConfig, Box } from "@chakra-ui/react";

const ScorllablePopup = forwardRef(({variant, ...rest}, ref) => {
    const styles = useStyleConfig("ScrollablePopup", { variant} );

    return <Box __css={styles} ref={ref} {...rest} />;
;});

export default ScorllablePopup;