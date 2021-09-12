import { Container, Content } from "./styles";

import { Header, Sidebar } from "layout";

import { StoreProvider, useStore } from "store";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "global/global.styles";

function App() {
  const {
    state: { theme },
  } = useStore();

  return (
    <StoreProvider>
      <ThemeProvider theme={{ current: theme }}>
        <GlobalStyles />
        <Container>
          <Header />
          <Content>
            <Sidebar />
          </Content>
        </Container>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
