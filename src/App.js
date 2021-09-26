import { useState, useEffect } from "react";

import { Container, Content } from "./styles";

import { Header, Sidebar, Skeleton } from "layout";

import { StoreProvider, useStore } from "store";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "global/global.styles";

function AppInit() {
  const {
    state: { theme },
  } = useStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <ThemeProvider theme={{ current: theme }}>
      <GlobalStyles />

      <Container>
        {!loading ? (
          <Skeleton />
        ) : (
          <>
            <Header />
            <Content>
              <Sidebar />
            </Content>
          </>
        )}
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
