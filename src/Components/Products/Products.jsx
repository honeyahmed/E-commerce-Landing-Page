import React from "react";
import { popularProducts } from "../../data";
import styled from "styled-components";
import Product from "../Product/Product";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  color: black;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap:10px ;

`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
