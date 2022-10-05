import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 30px;
`;
const Description = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 30px;
`;
const InputContianer = styled.div`
  width: 45%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: RGB(0, 128, 128);
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Description>
      <InputContianer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContianer>
    </Container>
  );
};

export default NewsLetter;
