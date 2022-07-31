import { Grid, Paper, Button, createTheme, styled, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255,204,204,.5)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'rgba(0,0,0,.5)',
  fontWeight: 'bold',
  fontSize: 18,
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgb(255, 160, 160)',
    borderRadius: '10px',
    backgroundClip: 'padding-box',
    border: '2px solid transparent',
  },
  '&::-webkit-scrollbar-track.': {
    backgroundColor: 'rgba(255, 160, 160, .3)',
    borderRadius: '10px',
    boxShadow: 'inset 0px 0px 5px white',
  }
}));

const DetailTodo = () => {
  const thisId = useParams().id
  const navigate = useNavigate()
  const [thisTodo] = useSelector(state => state.todo.list.filter(todo => todo.id === thisId))
  const goBack = () => navigate(-1)
  useEffect(() => {if(thisTodo === undefined) {navigate('/NotFound')}}, [])
  
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={5} sx={{width: 600, height: 600, p: 5, m: '50px auto', borderRadius: '25px'}}>
        <Grid container spacing={1}>
          <Grid item xs={3}><Item sx={{color: 'rgb(255, 160, 160)'}}>제목</Item></Grid>
          <Grid item xs={9}><Item sx={{maxHeight: 70}}>{thisTodo?.title}</Item></Grid>
          <Grid item xs={3}><Item sx={{color: 'rgb(255, 160, 160)'}}>Todo ID</Item></Grid>
          <Grid item xs={9}><Item>{thisTodo?.id}</Item></Grid>
          <Grid item xs={3}><Item sx={{color: 'rgb(255, 160, 160)'}}>내용</Item></Grid>
          <Grid item xs={12}><Item sx={{textAlign: "left", height: 300}}>{thisTodo?.body}</Item></Grid>
          <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
            <Button variant="contained" color="work" onClick={goBack} size="large">뒤로가기</Button>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default DetailTodo;
