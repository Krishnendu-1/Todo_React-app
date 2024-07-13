{/*import React, { useState } from 'react'
import { useTodo } from '../Context';

function Form() {

const [todomsg,setTodomsg]=useState("")
const {addtodo}=useTodo()

const add=(e)=>{
    e.preventDefault()
      if (!todomsg) return
addtodo({todomsg,checked:false})//id is givenm in app.jsx and only giving the new message
setTodomsg("");//set it normal
}
    return (
        <form  className="flex" onSubmit={add}>
            <input
                value={todomsg}
                onChange={(e)=>{setTodomsg(e.target.value)}}
                type="text"
                placeholder="Write Your Todos..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default Form;*/}

{
  /*Modified from Scratch*/
}

import React, { useState } from "react";
import { useTodo } from "../Context/UserContext";

function Form() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    addTodo({ todo, completed: false }); //the "todo" is injected through setTodo(), no need to assign like --> todomsg:todo
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-slate/20 py-1.5 text-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
