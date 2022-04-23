import React, {useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Bigcard } from "../component/bigcard";

const Pers =() => {
  const {uid} = useParams();
  const {store, actions} = useContext(Context);

    return (
        
         <div className="row bigcard">
         <img className="col-6 fotobig" src="https://cdn1-www.comingsoon.net/assets/uploads/2015/02/starwarsbarcelebration.jpg"></img>
         <div className="col-6 textobig">
             <h3>Descripcion</h3>
             <h4>Nombre: { store.personajes[uid]?.name}</h4>
             <h4>Altura: { store.personajes[uid]?.height} </h4>
             <h4>Peso: { store.personajes[uid]?.mass} </h4>
             <h4>Color de piel: { store.personajes[uid]?.skin_color}</h4>
             <h4>Cumpleaños: { store.personajes[uid]?.birth_year}</h4>

             
         </div>
     </div>
        
      )

}

export default Pers;