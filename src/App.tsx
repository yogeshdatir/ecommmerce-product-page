import styled from "@emotion/styled";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";

const Container = styled.div`
  max-width: 1110px;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <Header />
      <ProductPage />
    </Container>
  );
}

export default App;
