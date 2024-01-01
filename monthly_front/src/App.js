import React from 'react';
import {
  ChakraProvider,
  
  Flex,
  Spacer,
} from '@chakra-ui/react';
import Calendar from './components/Calendar/Calendar';
import Panel from './components/Layout/Panel';

import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex w='full' p='2rem 2rem'>
        <Panel/>
        <Spacer />
        <Calendar />
      </Flex>
    </ChakraProvider>
  );
}

// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Box textAlign="center" fontSize="xl">
//         <Grid minH="100vh" p={3}>
//           <ColorModeSwitcher justifySelf="flex-end" />
//           <VStack spacing={8}>
//             <Logo h="40vmin" pointerEvents="none" />
//             <Text>
//               Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
//             </Text>
//             <Link
//               color="teal.500"
//               href="https://chakra-ui.com"
//               fontSize="2xl"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn Chakra
//             </Link>
//           </VStack>
//         </Grid>
//       </Box>
//     </ChakraProvider>
//   );
// }

export default App;
