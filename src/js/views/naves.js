import React from "react";
import { Cards } from "../component/cards.js";
import "../../styles/naves.css";


const Naves = () => {

    return (
        <div className="container autos">
          <h3 className="titulopersonajes text-warning mt-4">Naves</h3>
          <div className="row justify-content-between">     
          <Cards>hola</Cards>
          <Cards>hola</Cards>
          <Cards>hola</Cards>
          </div>
        </div>
      )
}

export default Naves;