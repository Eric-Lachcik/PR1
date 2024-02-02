import React from "react";
import { Button } from "react-bootstrap";

function ToDoItem({content}: {content: String }){
    return(
        <div className="">
            <li>{content}</li>
            <Button variant="primary">Boton</Button>
        </div>
    )
}
export  default ToDoItem;