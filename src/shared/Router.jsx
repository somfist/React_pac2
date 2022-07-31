import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/common/Header";
import DetailTodo from "../pages/DetailTodo";
import TodoList from "../pages/TodoList";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/detail/:id" element={<DetailTodo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;