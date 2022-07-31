import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Router from "./shared/Router";
import Loading from "./components/common/Loading";

const App = () => {
  const loading = useSelector(state => state.todo.loading)
  console.log(loading)
  return (
    <Container>
      <Router/>
      {loading && <Loading/>}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  margin: auto;

  background-color: rgba(255, 204, 204,.3);
`;

export default App;
