import { useEffect, useReducer } from "react";
import { Todo, Action } from "../08-useReducer/types";
import { todoReducer } from "../08-useReducer/todoReducer";

  
// esta funcion se ejecuta una vez, cuando el componente se monta en el DOM.
const init = ():Todo[] => { //poner en el hook
    return JSON.parse(localStorage.getItem('todos') || '[]');
}

export const useTodo = () => {
 
    const [todos, dispatch] = useReducer(todoReducer, [], init );

    useEffect(():void => {
        localStorage.setItem( 'todos', JSON.stringify(todos) )
    }, [todos])


    const handleNewTodo = (todo:Todo) => {
        const action:Action = {
        type: "[TODO] add todo",
        payload: todo
        };
        dispatch( action );
    }

    const handleDeleteTodo = ( id:number ) => {
        dispatch({
        type: "[TODO] delete todo",
        payload: id
        })
    }

    const handleToggleTodo = ( id:number ) => {
        dispatch({
        type: "[TODO] toggle todo",
        payload: id
        })
    }

    const pendingTodosCount = todos.filter( todo => !todo.done).length;

    const todosCount = todos.length;


    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTodosCount,
        todosCount
    }
        
    
}
