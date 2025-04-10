
import React from 'react';
// import  "../../dist/output.css";
const saludar = (nombre, apellido) => {
    const usuario = prompt(`Ingrese su nombre y apellido:`);
    alert(`Bienvenido ${usuario}`);
};


function Saludo() {
    return (
      <div >
         <h1 className="w-24 h-8 bg-red-500">Primer boton en React</h1>
        <button className=" w-100 h-30 bg-red-500" onClick={() => saludar()}>Saludar</button>
      </div>
    );
  }
  
  export default Saludo;
  

