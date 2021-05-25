import "./App.css";
import React, { useState,useEffect } from "react";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";

const App = () => {


  //State staff
  const [inputText, setInputText] = useState("");
  const [toDo, setToDo] = useState([]);
  const [status, setStatus] = useState("all");    //default 
  const [filteredTodos, setFilteredTodos] = useState([])

useEffect(() => {
  getLocalToDo();
 
}, []);



//useEffect
useEffect(() => {
filterHandler();
saveLocalToDo();

}, [toDo, status]);


//Function
const filterHandler = ()=> {
    switch(status){
      case 'completed':
          setFilteredTodos(toDo.filter((item) =>(item.completed === true)))
          break;
      case 'uncompleted':
          setFilteredTodos(toDo.filter((item) =>(item.completed === false)))
          break;
      default:
          setFilteredTodos(toDo);
          break;
  }
}
//save  to local 
const saveLocalToDo = () => {
  localStorage.setItem('toDo',JSON.stringify(toDo))   // add new toDO
  }


const getLocalToDo = ()=>{
if(localStorage.getItem('toDo') === null){        //van e mar benne toDo?? --chekk
  localStorage.setItem('toDo',JSON.stringify([]))
}else{
  let toDoLocal= JSON.parse( localStorage.getItem('toDo'))
  setToDo(toDoLocal);
      }
                          }


  return (
    <div className="App">
      <header>
        <h1> TO DO LIST </h1>
        <Form
          toDo={toDo}
          setToDo={setToDo}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
         
        />
        <List toDo={toDo} setToDo={setToDo}  filteredTodos={filteredTodos} />
      </header>
    </div>
  );
};

export default App;
