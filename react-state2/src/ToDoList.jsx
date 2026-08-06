import { useState } from "react";
export default function ToDoList(){
    let [todos, setTodos] = useState(["Sample Task"])
    let [newTodos, setNewTodos] = useState("");
    function newTodo(){
        setTodos([...todos, newTodos])
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
                    return(<li>{todos}</li>);
                    }
                )
            }
        </ul>
    </div>
    );
}