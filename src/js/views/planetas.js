import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext.js";
import { Cards } from "../component/cards.js";
import "../../styles/planetas.css";

const Planetas = () => {
    const {store, actions} = useContext(Context)
    useEffect(()=>{
  
      actions.getPlanets()
      
    },[])
  
  
      return (
        <div className="container mundos" style={{}}>
          <h3 className="titulopersonajes text-warning mt-4"  >Planetas</h3>
          <div className="row justify-content-between">     
  
           {store.planetas.map(function(objeto){
             return <Cards objeto={objeto}></Cards>
           } )}
  
          
          
          </div>
        </div>
      )

}


export default Planetas;