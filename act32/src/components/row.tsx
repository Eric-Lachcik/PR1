import React from "react";

interface Row {
    fila: {
      Hash: number;  
      producto: string;
      cantidad: number;
      precio: number;
      tienda: string;
      notas: string;
      comprado: boolean;
      imagen: string;
    };
  }
  const Row: React.FC<Row> = ({ fila }) => (
    <tr>
      <td className="align-middle">{fila.Hash}</td>
      <td className="align-middle">{fila.producto}</td>
      <td className="align-middle">{fila.cantidad}</td>
      <td className="align-middle">{fila.precio}</td>
      <td className="align-middle">{fila.tienda}</td>
      <td className="align-middle">{fila.notas}</td>
      <td className="align-middle">{fila.comprado ? 'Sí' : 'No'}</td>
      <td><img src={fila.imagen} alt={fila.producto} style={{width: "100px", height: "100px"}} /></td>
    </tr>
  );

export default Row;