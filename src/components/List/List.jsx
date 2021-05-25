import React from "react";
import ToDo from "../ToDo/ToDo.jsx";

function List({ toDo, setToDo,filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(
          (
            item //map a toDo => meg kap egy to do-t - es ahoz hozza rendeli a ToDo componentet (item =1db todo) /fejenkent for each
          ) => (
            <ToDo
              toDo={toDo}
              setToDo={setToDo}
              text={item.text}
              item={item}
              key={item.id}
            /> //each to do text , id atadas
          )
        )}
      </ul>
    </div>
  );
}

export default List;
