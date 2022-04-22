import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext.js";
import { Cards } from "../component/cards.js";
import "../../styles/personajes.css";

const Personajes = () => {
  const {store, actions} = useContext(Context)
  useEffect(()=>{

    actions.getPeople()
    
  },[])


    return (
      <div className="container actores" style={{}}>
        <h3 className="titulopersonajes text-warning mt-4"  >Personajes</h3>
        <div className="row justify-content-between">     

         {store.personajes.map(function(objeto){
           return <Cards objeto={objeto}></Cards>
         } )}

        
        
        </div>
      </div>
    )
}

export default Personajes;