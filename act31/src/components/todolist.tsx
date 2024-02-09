import React, { useState } from "react";
import ToDoItem from "./todoitems";
import { Button } from "react-bootstrap";

type Tarea = {
    id: number;
    texto: string;
    completed: boolean;
  };


function ToDoList(){
    const[tareas, setTareas]= React.useState<Tarea[]>([{
        id: 1,
        texto: 'Limpiar',
        completed: true
    }]);

    const[texto, setTexto] = useState('');
    function addTarea(texto: string){
        const nuevaTarea = {
            id: Date.now(),
            texto,
            completed: false
        };
        setTareas([...tareas, nuevaTarea]);
        setTexto('');    
    }
    function deltarea(id: number){
        setTareas(tareas.filter(tarea => tarea.id !== id ))
    };
    function check(id: number){
        setTareas(tareas.map(tarea => {
            if (tarea.id === id){
                return {...tarea, completed: !tarea.completed };
            }else{
                return tarea;
            }
        }));
    }
    return(
        <div>
            <input value={texto} onChange={e => setTexto(e.target.value)}></input>
            <Button variant="primary" onClick={() => addTarea(texto)}>Añadir</Button>
            {tareas.map(tarea => (
            <ToDoItem
            key={tarea.id} 
            Tarea={tarea}
            deltarea={deltarea}
            check={check}
            />
            ))}
        </div>
    );  
}
export default ToDoList;