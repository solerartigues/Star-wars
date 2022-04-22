import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext.js";
import { Cards } from "../component/cards.js";
import "../../styles/naves.css";


const Naves = () => {

  const {store, actions} = useContext(Context)
  useEffect(()=>{

    actions.getStarships()
    
  },[])


    return (
      <div className="container autos" style={{}}>
        <h3 className="titulopersonajes text-warning mt-4"  >Naves</h3>
        <div className="row justify-content-between">     

         {store.naves.map(function(objeto){
           return <Cards objeto={objeto}></Cards>
         } )}

        
        
        </div>
      </div>
    )
}
export default Naves;