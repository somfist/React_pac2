import React from "react";
import {Card, Button, CardActions, CardContent, Typography, CardActionArea} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteTodo, loadingCheck, modifyTodo } from "../../redux/modules/todo";

const theme = createTheme({
    palette: {
      todoStyle: {
        main: 'rgb(255, 160, 160)',
        contrastText: '#fff'
      },
      work: {
        main: 'rgb(196, 199, 51)',
        contrastText: '#fff'
      },
      success: {
        main: 'rgb(39, 109, 57)',
        contrastText: '#fff'
      },
      delete: {
        main: 'rgb(119, 28, 28)',
        contrastText: '#fff'
      }
    }
  })
const hiddenCSS = {
  position: "absolute",
  top:0, left:0, bottom:0, right:0, opacity: 0,
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  color: 'white', fontWeight: 'bold',
  bgcolor: "rgba(255, 160, 160, .5)",
  "&:hover": {opacity: 1},
}

const Todo = (props) => {
    const todo = props.todo ? props.todo : {
      id: null, 
      title: (!props.isDone ? '할일 목록' : '완료된 목록') + '이 없어요', 
      body: (!props.isDone ? '한가하' : '바쁘') + '신가봐요?', 
      isDone: props.isDone
    }
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const deleteHandler = () => dispatch(loadingCheck(deleteTodo, todo.id))
    const modifyHandler = () => dispatch(loadingCheck(modifyTodo, todo.id))
    const noticeHandler = () => alert('상단의 추가 버튼을 이용해주세요!')
    const linkDetail = () => navigate('/detail/' + todo.id)

    return (
    <ThemeProvider theme={theme}>
    <Card sx={{ width: 380, minHeight: 150, mt: 1, mb: 1, textAlign: 'center', bgcolor: (todo.id ? '' : 'rgba(0,0,0,.3)')}}>
      <CardActionArea onClick={ todo.id ? linkDetail : null }>
        <CardContent>
            <Typography variant='h6' sx={{fontWeight: 'bold', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                {todo.title}
            </Typography>
            <Typography variant="body1" sx={{mt: 2, fontSize: 14, overflow: 'hidden', whiteSpace: 'nowrap' ,textOverflow: 'ellipsis'}}>
                {todo.body === '' ? '내용이 없어요!' : todo.body}
            </Typography>
            <Typography variant="h3" sx={hiddenCSS}>상세보기</Typography>
        </CardContent>
      </CardActionArea>
      {todo.id ?
      <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button onClick={modifyHandler} variant="contained" color={todo.isDone ? 'work' : 'success'} size="small">{todo.isDone ? '취소' : '완료' }</Button>
          <Button onClick={deleteHandler} variant="contained" color="delete" size="small">삭제</Button>
      </CardActions> : 
      <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button onClick={todo.isDone ? null : noticeHandler} variant="contained" color="todoStyle" size="small">할일을 {todo.isDone ? '완료' : '추가'}해봐요!</Button>
      </CardActions>}
    </Card>
  </ThemeProvider>
  );
};

export default Todo;