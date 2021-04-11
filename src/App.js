import React from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  return (
    <>
        <ChakraProvider >
        <GlobalStyle />
        <Routes />
      </ChakraProvider>
    </>
  );
};

export default App;
