import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
export default function ToDoList(){
    let [todos, setTodos] = useState([{task : "sample-task", id : uuidv4()}])
    let [newTodos, setNewTodos] = useState("");
    function newTodo(){
        setTodos([...todos, {task : newTodos , id : uuidv4()}])
        setNewTodos("");
    }
    function updatedTask(event){
        setNewTodos(event.target.value);
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
                    return(<li key = {todos.id}>{todos.task}</li>);
                    }
                )
            }
        </ul>
    </div>
    );
    uuidv4();
}