import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

const dateTextStyle = {
    variants: {
        date: {
            fontSize: 'xs',
            m: '.4rem .4rem',
        },
    }
};


const ScrollablePopup = defineStyleConfig({
  baseStyle: {
    w: 'full',
    h: 'full',
    top: '50%',
    left: '50%',
    position: 'absolute',
    backgroundColor: 'white',
    transition: 'all .15s ease-in-out',
    '&::-webkit-scrollbar': { display: 'none' },
  },

  variants: {
    popup: {
      w: '21rem',
      h: '21rem',
      overflow: 'scroll',
      boxShadow: '0px 5px 20px -2px #00000033',
      zIndex: '100',
      transform: 'translate(-50%, -50%)',
    },

    celled: {
      w: '7rem',
      h: '7rem',
      overflow: 'hidden',
      boxShadow: 'none',
      zIndex: '0',
      transform: 'translate(-50%, -50%)',
    }
  },
});


const theme = extendTheme({

    components: {
        Text: {...dateTextStyle},
        ScrollablePopup,
    }

});

export default theme;