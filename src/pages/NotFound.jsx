import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  const goHome = () => navigate('/')
  setTimeout(goHome, 1500)
  return (
    <Container onClick={goHome}>
        <h1>존재하지 않는 페이지입니다!</h1>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex; justify-content: center; align-items: center; flex-flow: column;
  background-color: rgba(0,0,0,.5);
  color: red;
`;

export default NotFound;
