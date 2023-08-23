import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import  {Footer}  from "./MyComponents/Footer";
import {TodoItem}  from './MyComponents/TodoItem';

import React,{useState} from 'react';
import AddTodo from './MyComponents/AddTodo';
// import { AddTodo } from "./MyComponents/AddTodo";
// import { About } from "./MyComponents/About";
function App() {
  const onDelete =(todo)=>{
    console.log("I am on delete of todo",todo);
  // it does not work in react 
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }));
  }
  const [todos,setTodos]=useState([
  
    {
      sno:1,
      title:"go to the market",
      desc:"you need to go to the market to get this job done"
    },
    {
      sno:2,
      title:"go to the market",
      desc:"you need to go to the market to get this job done2"
    },
    {
      sno:3,
      title:"go to the market",
      desc:"you need to go to the market to get this job done3"
    }
    
  ]);
    return(
      <>
      <Header title="my to do list" searchBar={false}/>
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete}/>
      {/* <TodoItem todo={todos[0]} /> */}
      {/* <TodoItem/> */}
      <Footer/>
      </>
    );
}
export default App;
