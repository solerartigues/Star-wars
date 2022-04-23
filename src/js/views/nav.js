import React, {useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Bigcard } from "../component/bigcard";

const Nav =() => {
  const {uid} = useParams();
  const {store, actions} = useContext(Context);

    return (
        
         <div className="row bigcard">
         <img className="col-6 fotobig" src="https://cdn1-www.comingsoon.net/assets/uploads/2015/02/starwarsbarcelebration.jpg"></img>
         <div className="col-6 textobig">
             <h3>Descripcion</h3>
             <h4>Nombre: { store.naves[uid]?.name}</h4>
             <h4>Fabricante: { store.naves[uid]?.manufacturer} </h4>
             <h4>Velocidad maxima: { store.naves[uid]?.max_atmosphering_speed} </h4>
             <h4>Clase: { store.naves[uid]?.vehicle_class}</h4>
             <h4>Largo: { store.naves[uid]?.length}</h4>

             
         </div>
     </div>
        
      )

}

export default Nav;