import React from "react";

function Form({ setInputText, inputText, toDo, setToDo, setStatus }) {

     const inputTextHandler = (e) => {

            console.log(e.target.value);
            setInputText(e.target.value);
                                     };

     const submitHandler = (e) => {
              e.preventDefault(); //otherwise the page would refresh if I click on the button

                setToDo([
                  ...toDo, //if I have something on the list already  just pass it and a new comes in the{ } -ben
                  { text: inputText, completed: false, id: Math.random() * 1000 }, //how our todo will look like
                ]);

              setInputText(""); //  after submit click =>empty the inputfield
                               };

    const statusHandler = (e)=> {
                console.log(e.target.value);    /*  all,completed,uncompleted --render beallitasa */ 
                setStatus(e.target.value)
}





  return (
    <div className="first_row">
      <form action="">
        <input
          /* the value dont forfet to specify what is the value !!*/
          value={inputText}
          type="text"
          className="todo-input"
          onChange={inputTextHandler}
        />{" "}
        <button className="todo-button" type="submit" onClick={submitHandler}>
          <i className="fa fa-plus" aria-hidden="true"></i> / Submit
        </button>
      </form>

      <div className="select">
        <select onChange={statusHandler} name="name" className="filter-todo">    {/*  all,completed,uncompleted --render beallitasa */}
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
