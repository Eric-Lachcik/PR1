import React from "react";
import ToDoItem from "./todoitems";
import { Button } from "react-bootstrap";
import { text } from "stream/consumers";



function ToDoList(){
    const [tasks, setTasks] =React.useState(["Tasca 1", "Tasca 2","Tascaza"]);

    function addTask(texto: string){
        setTasks(currentTasks => [...currentTasks, texto])
    }


    return(
        <div>
            <h1>La meva llista ToDoList</h1>
            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem key={index}content={task}/>
                ))}
            </ul>
            <Button variant="primary" onClick={() => addTask("NuevaTarea")}>Añadir Tarea</Button>
        </div>
    )
}
export default ToDoList;