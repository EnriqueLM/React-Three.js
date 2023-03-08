import React from "react";
import { Button } from "react-bootstrap";

function Boton() {
  function alerta() {
    alert("Abrir modelo 3D");
  }
  return (
    <div className="content">
      <h1> Prueba con modelos 3D en react</h1>
      <Button variant="btn btn-success" onClick={() => alerta()}>
        Botón
      </Button>
    </div>
  );
}

export default Boton;
