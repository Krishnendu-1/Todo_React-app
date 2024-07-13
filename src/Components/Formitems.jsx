{/*import React, { useState } from 'react'
import { useTodo } from '../Context';

function Formitems({ todomsg }) {
    const {edittodo,deletetodo,toggletodo}=useTodo()
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const [todoMsg,setTodoMsg]=useState(todo.todomsg)

const edittodomsg=()=>{
    edittodo(todomsg.id,{...todomsg,todomsg:todoMsg})
    setIsTodoEditable(false)
}
const toggle=()=>{
toggletodo(todomsg.id)
}

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todomsg.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todomsg.checked}
                onChange={toggle}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todomsg.checked ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todomsg.checked) return;

                    if (isTodoEditable) {
                        edittodomsg();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todomsg.checked}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
           
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetodo(todomsg.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default Formitems;*/}

{
  /*Modified from Scratch */
}

import React, { useState } from "react";
import { useTodo } from "../Context/UserContext";

function Formitems({ todomsg }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todomsg.todo); //this .todo is used in addTodo({todo}) method
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todomsg.id, { ...todomsg, todomsg: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todomsg.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-black/50 duration-300  text-black ${
        todomsg.completed ? "bg-[#cfed8a]" : "bg-[#bbf79f]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todomsg.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todomsg.completed ? "line-through" : " "}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todomsg.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todomsg.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todomsg.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default Formitems;
