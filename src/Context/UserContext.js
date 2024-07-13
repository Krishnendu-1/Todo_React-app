{/*import { createContext, useContext } from "react";

export const TodoContext= createContext(
    {//variables,methods and arrays
todos:[{
    id:1,
    todomsg:"todo message",
    checked:false
}],
addtodo:(todomsg)=>{},
deletetodo:(id)=>{},
edittodo:(id,todomsg)=>{},
toggletodo:(id)=>{}




    }

)
export const TodoContextProvider=TodoContext.Provider;

export const useTodo=()=>{//custom context hook
    return useContext(TodoContext);//to give the context...what is the context that is to be used as global variable
}*/}

{/*👆🏻👆🏻👆🏻 Above exporting "UserContext" and "UserContextProvider" was
  wrongly exported as "TodoContext" and "TodoContextProvider"... 
  That's why the context API wasnt working🙃🙃*/}

{/* Modified from Scratch*/}

import {createContext, useContext} from "react"

export const UserContext = createContext({
    todos: [
        {
            id: 1,
            todomsg: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todomsg) => {},
    updateTodo: (id, todomsg) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(UserContext)
}

export const UserContextProvider = UserContext.Provider 