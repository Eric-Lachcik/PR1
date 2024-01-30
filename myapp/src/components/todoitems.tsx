import React from "react";

function ToDoItem({content}: {content: String }){
    return(
        <li>{content}</li>
    )
}
export  default ToDoItem;