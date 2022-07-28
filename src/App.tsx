import styled from "@emotion/styled";
import Header from "./components/Header";
import CartContextProvider from "./contexts/cartContext";
import ProductListContextProvider from "./contexts/productListContext";
import ProductPage from "./pages/ProductPage";

const Container = styled.div`
  max-width: 1110px;
  margin: auto;
`;

function App() {
  return (
    <ProductListContextProvider>
      <CartContextProvider>
        <Container>
          <Header />
          <ProductPage />
        </Container>
      </CartContextProvider>
    </ProductListContextProvider>
  );
}

export default App;
