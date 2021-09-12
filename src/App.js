import { Container, Content } from "./styles";

import { Header, Sidebar } from "layout";

import { StoreProvider, useStore } from "store";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "global/global.styles";

function AppInit() {
  const {
    state: { theme },
  } = useStore();
  
  return (
    <ThemeProvider theme={{ current: theme }}>
      <GlobalStyles />
      <Container>
        <Header />
        <Content>
          <Sidebar />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

function App() {
  return (
    <StoreProvider>
      <AppInit />
    </StoreProvider>
  );
}

export default App;
