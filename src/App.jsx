{/*import React, { useEffect, useId, useState } from "react";
import { TodoContextProvider } from "./Context";
import Form from "./Components/Form";
import Formitems from "./Components/Formitems";

function App() {
  const [todos, setTodos] = useState([]);
  //Context establishment
  const addtodo = (todomsg) => {
    setTodos((prev) => {
      //"setTodos((prev)=>{}" is used to add new one over previous, if not used then all will erase and only add one item
      [{ id: Date.now(), ...todomsg }, ...prev]; //speading preavius todos and add new one at top//the ...todo is used to show user written todo work manually and, only we add here is the unique id.
    });
  };
  const edittodo = (id, todomsg) => {
    setTodos((prev) => {
      prev.map((preveachtodo) =>
        preveachtodo.id === id ? todomsg : preveachtodo
      );
    });
  };

  const deletetodo = (id) => {
    setTodos((prev) => {
      prev.filter((preveachtodo) => {
        preveachtodo.id !== id; //it filters all but eliminates the matching id
      });
    });
  };

  const toggletodo = (id) => {
    setTodos((prev) => {
      prev.map((preveachtodo) =>
        preveachtodo.id === id
          ? { ...preveachtodo, checked: !preveachtodo.checked }
          : preveachtodo
      );
    });
  };
  //Local storage--> it always give in string format and we've to send it back in string format
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")); //have to access in json format
    if (todos && todos.length > 0) setTodos(todos);
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); //"todos" is working like id and next is the json data
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addtodo, deletetodo, edittodo, toggletodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <Form />
          </div>
          <div className="flex flex-wrap gap-y-3">
            
            {todos.map((todomsg)=>
             { return(<div key={todomsg.id} className="w-full">
                <Formitems todomsg={todomsg} />
              </div>)}
            )}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;*/}

{/*👆🏻👆🏻👆🏻 Above importing "UserContext" and "UserContextProvider" was
  wrongly imported as "TodoContext" and "TodoContextProvider"... 
  That's why the context API wasnt working🙃🙃*/}

{/*Modified from Scratch */}
import { useState, useEffect, useId } from 'react'
import {UserContextProvider} from './Context/UserContext'
import Form from './Components/Form'
import Formitems from './Components/Formitems'

function App() {
  const [todos, setTodos] = useState([])
const TodoId=useId();
  const addTodo = (todomsg) => {
    setTodos((previous) => [{id: Date.now() ,...todomsg,completed:false}, ...previous] )
  }

  const updateTodo = (id, todomsg) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todomsg : prevTodo )))

  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))//sice "todos" is not valid json,it just a id...whole is in json format
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  {/*The "setItem" can be set according to "todos" as change in every todo in
               local storage.
               But the "getItem" from local storage can not get items according to each change in "todos",
               if it gets item on each todo change from local storage, then it will be load in the react UI.
               Thats why in the "getItem" useeffect, dependency array [] is empty, and on browser reload it will be there.
    
    */ }
  



  return (
    <UserContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className=" bg-orange-100 min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-zinc-700">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        < Form/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((TODO) => (
                          <div key={TODO.id}
                          className='w-full'
                          >
                            <Formitems todomsg={TODO} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </UserContextProvider>
  )
}

export default App