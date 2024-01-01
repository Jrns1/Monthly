import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

const dateTextStyle = {
    variants: {
        date: {
            fontSize: 'md',
            m: '.4rem .4rem',
        },
    }
};

const Cell = defineStyleConfig({
    baseStyle: {
        w: 'full',
        h: 'full',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    }
});

const theme = extendTheme({
    colors: {
        brand: {
            50: "#e2f5ff",
            100: "#b6e0ff",
            200: "#88c7ff",
            300: "#5aaeff",
            400: "#2c94ff",
            500: "#007aff",
            600: "#0062cc",
            700: "#004a99",
            800: "#003266",
            900: "#001a33",
        },
    },

    components: {
        Text: {...dateTextStyle},
        Cell,
    }
});

export default theme;