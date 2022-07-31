import React from "react"
import styled from "styled-components"

import Form from "../form/Form";
import Progress from "../progressbar/Progressbar";

const Header = () => {
  return (
    <Container>
        <div>
            <div>My TodoList</div>
            <div>주특기 2주차</div>
        </div>
        <hr></hr>
        <div>
            <Progress/>
            <Form/>
        </div>
    </Container>
  );
};

const Container = styled.header`
  background-color: rgb(255, 204, 204);
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: white;
    font-weight: bold;
    font-size: 20px;
  };
  & > div {justify-content: space-between;}
`;

export default Header;
