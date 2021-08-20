import { Container, Content } from "./styles";

import { Header, Sidebar } from "layout";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
      </Content>
    </Container>
  );
}

export default App;
