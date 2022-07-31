import React, {useEffect, useState} from "react";
import {AddComment} from "@mui/icons-material";
import {Box, Button, Modal, TextField, Tooltip, createTheme, ThemeProvider} from "@mui/material";
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import {nanoid} from "nanoid"

import { addTodo, loadingCheck } from "../../redux/modules/todo";
import { useLocation, useNavigate } from "react-router-dom";

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
const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid rgb(255, 160, 160)',
    p: 4
};

const Form = () => {
    const dispatch = useDispatch()
    const location = useLocation().pathname
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = useState('');
    const titleHandle = (event) => setTitle(event.target.value);
    const [body, setBody] = useState('');
    const bodyHandle = (event) => setBody(event.target.value);

    const empty = () => {
        setTitle('')
        setBody('')
    }

    const addEvent = () => {
      if(title === '') {
        alert('제목을 입력해주세요!')
        return
      }
      const newTodo = {
        'id': nanoid(),
        'title': title,
        'body': body,
        'isDone': false
      }
      empty()
      dispatch(loadingCheck(addTodo, newTodo))
      navigate('/')
    }
    
    useEffect(() => {empty()}, [location])

    return (
        <ThemeProvider theme={theme}>
            <Tooltip title="할일 추가">
                <Button variant="contained" color="todoStyle" onClick={handleOpen} size="large" sx={{marginRight: '50px'}}>
                    <AddComment/>
                </Button>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description">
                <Box sx={boxStyle}>
                    <InnerBox>
                        <TextField
                            label="제목"
                            multiline
                            maxRows={5}
                            value={title}
                            onChange={titleHandle}
                            sx={{
                                width: 300
                            }}/>
                        <TextField
                            label="내용"
                            multiline
                            maxRows={5}
                            value={body}
                            onChange={bodyHandle}
                            sx={{
                                width: 300
                            }}/>
                    </InnerBox>
                    <InnerBox
                        style={{
                            flexFlow: "row"
                        }}>
                        <Button variant="contained" color="todoStyle" onClick={addEvent} size="large">추가하기</Button>
                        <Button variant="contained" color="work" onClick={handleClose} size="large">뒤로가기</Button>
                    </InnerBox>
                </Box>
            </Modal>
        </ThemeProvider>
    )
};

const InnerBox = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  & > button {
    margin: 0 30px;
  }
  & > :last-child:not(button) {
    margin: 30px;
  }
`

export default Form
