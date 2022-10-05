import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Container = styled.div`
  background-color: rgb(5, 60, 60);
  color: white;
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 6px;
  background-color: white;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px !important;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.icon === "fb" && "#4064AC"};
    color: ${(props) => props.icon === "tw" && "#1DA1F2"};
    color: ${(props) => props.icon === "ig" && "#C13584"};
  }
`;
const InfoContainer = styled.ul`
  display: flex;
  list-style: none;
`;
const Info = styled.li`
  color: white;
  font-weight: 700;
  margin-left: 10px;
  font-size: 14px;
  cursor: pointer;
`;
const CopyRight = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 14px;
`;

const Footer = () => {
  return (
    <Container>
      <IconsContainer>
        <Circle icon={"fb"}>
          <FaFacebookF />
        </Circle>
        <Circle icon={"tw"}>
          <FaTwitter />
        </Circle>
        <Circle icon={"ig"}>
          <BsInstagram />
        </Circle>
      </IconsContainer>
      <InfoContainer style={{ marginTop: "25px" }}>
        <Info>Info.</Info>
        <Info>Support.</Info>
        <Info>Marketing.</Info>
      </InfoContainer>
      <InfoContainer style={{ marginTop: "10px" }}>
        <Info>Our Terms</Info>
        <Info>Privacy Policy</Info>
      </InfoContainer>
      <CopyRight>&copy; 2022 E-commerce</CopyRight>
    </Container>
  );
};

export default Footer;
