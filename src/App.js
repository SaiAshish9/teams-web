import { useState, useEffect } from "react";

import { Container, Content } from "./styles";

import { Header, Sidebar, Skeleton, Drawer } from "layout";

import { StoreProvider, useStore } from "store";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "global/global.styles";

import { HomeScreen, TeamScreen, ChatScreen } from "screens";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function AppInit() {
  const {
    state: { theme },
  } = useStore();

  const [loading, setLoading] = useState(true);

  const [visible, setVisible] = useState(false);
  const toggleDrawer = () => {
    setVisible((t) => !t);
  };

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <ThemeProvider theme={{ current: theme }}>
      <GlobalStyles />

      <Drawer visible={visible} toggleDrawer={toggleDrawer} />

      <Container>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Header setVisible={setVisible} />
            <Content>
              <Sidebar />
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/teams" component={TeamScreen} />
                <Route exact path="/chat" component={ChatScreen} />
              </Switch>
            </Content>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <AppInit />
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
