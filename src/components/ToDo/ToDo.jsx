import React from "react";

function Todo({ text, toDo, setToDo, item }) {

console.log('todo prop item=',item);
  const deleteHandler = () => {
    setToDo(toDo.filter((el) => el.id !== item.id)); //az element amire kattintok id !== nem egyenlo item.id =>akor tolje ki????
    //try to find an element which id's match the id we clicked on (akkor miert !==)
    //if matches its get rid of it
  };

  const completeHandler = () => {
    setToDo(
      toDo.map((el) => {
        console.log('item=',el,  item.id,'=',el.id,el  ) ;
        if (item.id === el.id) {
          //amire kattintottunk id === the one from state
          console.log('item=',item);
          console.log('el=',el);
          return {

         
            ...el, //pass the property what this item already has modify the completed property only {amelyikre kattintottam} 57.perc

            completed: !el.completed
          };
        }
        return el;            //if did not match return what ever it was
      })
    );
  };

  return (
    <div className="todo">

      <li className= {`todo-item  ${ item.completed ? "completed" : "" }`}> <input className={`${ item.completed ? "completed" : "" }`} type='text' defaultValue={text} /></li>   {/*  todo-item class toggle with the complete class if we clilc on the tick (pipa) */}

      <button onClick={completeHandler} className="complete-btn">
        <i className="fa fa-check" aria-hidden="true"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa fa-trash" aria-hidden="true"></i>{" "}
      </button>
    </div>
  );
}

export default Todo;
