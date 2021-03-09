import React from "react";
import GlobalStyle from "./styles/global";

import Routes from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes title="Nome do App" />
    </>
  );
};

export default App;
