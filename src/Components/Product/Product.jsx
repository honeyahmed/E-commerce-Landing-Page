import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Image = styled.img`
  height: 75%;
  z-index: 2;
  transition: all 0.4s ease;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 3px;
  /* margin-bottom:14px; */
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F7F7F7;
  position: relative;
  
  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${Image} {
    transform: scale(1.1);
  }
`;


const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px;
  transition: all 0.2s ease;
  &:hover {
    background-color: #9c27b0;
    color: white;
    transform: scale(1.2);
  }
  cursor: pointer;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingBagOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
