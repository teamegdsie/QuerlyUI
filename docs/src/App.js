import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./querlyUI/styled/Global";

import { Header } from "./querlyUI/Header/Header";
import { Container } from "./querlyUI/styled/Container.styled";
function App() {
  const theme = {
    colors: {
      header: "gold",
      body: "pink",
      footer: "#00333",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>hello world</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
