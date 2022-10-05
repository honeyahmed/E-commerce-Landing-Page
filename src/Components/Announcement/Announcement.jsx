import React from 'react';
import styled from "styled-components";
const Container =styled.div`
height: 40px;
background-color: teal;
color: white;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 12px;
`
const Announcement = () => {
    return (
            <Container>
                Welcome To Our E-commerce Website ... Enjoy Our Sale $.
            </Container>
    );
}

export default Announcement;
