import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RunCircleRounded } from "@mui/icons-material"

const Progress = () => {
    const todoList = useSelector((state) => state.todo.list);
    let count = 0;
    todoList.map(todo => {
    if (todo.isDone) {count++;}
    });

  return (
    <ProgressBar>
      <HighLight width={(count / todoList.length) * 100 + "%"} />
      <RunCircleRounded style={{fontSize: '60px', color: 'rgb(70, 150, 120)', margin: '0 0 0 -20px'}}/>
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 50% ;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: rgb(255, 160, 160);
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
`;

export default Progress;