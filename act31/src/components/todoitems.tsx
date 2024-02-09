import React from "react";
import { Button } from "react-bootstrap";

type tarea = {
    id: number;
    texto: string;
    completed: boolean;
}
type ToDoItemProps = {
    Tarea: tarea;
    deltarea: (id: number) => void;
    check: (id: number) => void;
  };


function ToDoItem({ Tarea, deltarea, check}: ToDoItemProps){
    function handleChange() {
        check(Tarea.id);
        }
    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={Tarea.completed}
                onChange={handleChange}
            />
            <p>{Tarea.texto}</p>
            <Button variant="primary" onClick={() => deltarea(Tarea.id)}>X</Button>
        </div>
    );
    
}


export  default ToDoItem;