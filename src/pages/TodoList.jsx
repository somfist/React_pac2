import React from "react";
import styled from "styled-components";
import {CheckCircleOutline, UnpublishedOutlined} from "@mui/icons-material"
import List from "../components/list/List";

const TodoList = () => {
  const typeList = [false, true]
  return (
    <Container>
      {typeList.map((e) =>{
        const layout = 
          <div key={e+''}>
            <p>
              {e ? <CheckCircleOutline color="primary" sx={{ fontSize: 60 }}/> :
               <UnpublishedOutlined color="error" sx={{ fontSize: 60 }}/> }
            </p>
            <hr/>
            <List isDone={e}/>
          </div>
        return layout
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  & > div { width: 50%; }
  & > div > p {
    display: flex;
    justify-content: center;
  }
  & > div:first-child { border-right: 1px solid rgba(255, 204, 204,.3); }
`;

export default TodoList;
