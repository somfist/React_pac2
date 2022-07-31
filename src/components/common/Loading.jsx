import React from "react";
import styled from "styled-components";
import {CircularProgress} from "@mui/material";

const Loading = () => {
    return (
      <Outter>
        <CircularProgress color="secondary" size="100px"/>
      </Outter>
    );
}

const Outter = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  display: flex; align-items: center; justify-content: center;
  background-color: rgba(255, 204, 204,.3);
`;

export default Loading;