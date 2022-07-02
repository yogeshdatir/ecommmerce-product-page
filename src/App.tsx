import styled from "@emotion/styled";
import Header from "./components/Header";
import Product from "./pages/Product";

const Container = styled.div`
  max-width: 1110px;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <Header />
      <Product />
    </Container>
  );
}

export default App;
