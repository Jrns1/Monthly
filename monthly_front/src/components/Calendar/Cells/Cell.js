import { GridItem, useStyleConfig } from "@chakra-ui/react";

function Cell (props) {
    const { variant, children, ...rest } = props;
    const styles = useStyleConfig("Cell", { variant });

    return <GridItem __css={styles} {...rest}>{children}</GridItem>;
}

export default Cell;