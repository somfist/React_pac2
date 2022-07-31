import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux"
import Todo from "../todo/Todo";

const List = (props) => {
  const todoList = useSelector(state => state.todo.list)
  const filterList = todoList.filter(todo => todo.isDone === props.isDone)
  return (
    <Container>
        {filterList.length === 0 ? <Todo todo={null} isDone={props.isDone}/> : ''}
        {filterList.reverse().map(todo => <Todo todo={todo} key={todo.id}/>)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: column;
  height: calc(100vh - 210px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 160, 160);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(255, 160, 160, .3);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export default List;
