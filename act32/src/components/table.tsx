import React from "react";
import { filas } from "./lista";



function Table(){
    return <>
       <table className="table table-striped table-dark">
            <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Tienda</th>
                    <th scope="col">Notas</th>
                    <th scope="col">Comprado</th>
                    <th scope="col">Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Manzana</td>
                    <td>2</td>
                    <td>3.4</td>
                    <td>Eroski</td>
                    <td>Comprar 2 rojas</td>
                    <td>True</td>
                    <td>Imagen_Manzana</td>
                </tr>
            </tbody>
       </table>

    
    
    </>
}

export default Table;