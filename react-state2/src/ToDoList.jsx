import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
export default function ToDoList(){
    let [todos, setTodos] = useState([{task : "sample-task", id : uuidv4(), isDone : false}])
    let [newTodos, setNewTodos] = useState("");
    function newTodo(){
        setTodos((prevTodos) =>{
          return(  [...todos, {task : newTodos , id : uuidv4()}]
        );
        })
        setNewTodos("");
    }
    function deleteTodo(id){
      setTodos((prevTodos) => todos.filter((todos) => todos.id != id))
    }
    function updatedTask(event){
        setNewTodos(event.target.value);
    }
    let upperCaseAll = () =>{
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return{
                ...todo,
                task: todo.task.toUpperCase()
            }; 
        }))
    }
    let upperCaseOne = (id) =>{
        setTodos((todos) => todos.map((todo) => {
            if(todo.id === id){
                return {
                    ...todo,
                    task : todo.task.toUpperCase(),
                };
            }
            else{
                return todo;
            }
        })
    );
};
let lowerCaseAll = () =>
   setTodos((prevTodos) => prevTodos.map((todo) => {
            return{
               ...todo,
             task : todo.task.toLowerCase()
         }
    }
))
let markDoneOne = (id) =>{
    setTodos((todos) => todos.map((todo) =>{
        if(todo.isDone == id){
            return{
                ...todo,
                isDone : true
            }
        }
        else{
            return false;
    
        }
    }))
}

return  (
    <div>
        <h1>ToDo-List</h1>
        <p>
        <input placeholder="Add a Task" value={newTodos} onChange={updatedTask}></input>&nbsp;&nbsp;&nbsp;
        <button onClick={newTodo}>Add</button>
        </p>
        <hr></hr>
        <h3>Task ToDo</h3>
        <ul>
            {
                todos.map((todos) => {
                    return(<li key = {todos.id}>
                        <span>{todos.task}</span>
                         &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todos.id)}>Delete</button>&nbsp;&nbsp;&nbsp;
                        <button onClick={upperCaseOne}>Convert to UpperCase</button>
                        <input type="checkbox" onClick={markDoneOne}></input>
                    </li>);
                    }
                )
            }
        </ul>
        <button onClick={upperCaseAll}>Convert to UpperCase</button><br></br>
        <button onClick={lowerCaseAll}>Convert to LowerCase</button>
    </div>
    );
    uuidv4();
}