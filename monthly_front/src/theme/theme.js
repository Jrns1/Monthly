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
        overflow: 'hidden',
        position: 'absolute',
        backgroundColor: 'white',
        transition: 'all .15s ease-in-out',
        '&::-webkit-scrollbar': { display: 'none' },
    },

    variants: {
        popup: {
            w: '300%',
            h: '300%',
            overflow: 'scroll',
            boxShadow: '0px 5px 20px -2px #00000033',
            zIndex: '100',
            transform: 'translate(-7rem, -7rem)',
        },
        
        celled: {
            w: '100%',
            h: '100%',
            overflow: 'hidden',
            boxShadow: 'none',
            zIndex: '0',
        }
    },
});

const theme = extendTheme({

    components: {
        Text: {...dateTextStyle},
        Cell,
    }

});

export default theme;