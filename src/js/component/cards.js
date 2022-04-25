import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";


export const Cards = (props) => {

  const elementos = ["Rony", "Nestor", "Pochi"];


 const [arreglo, setArrego] = useState (elementos);
 console.log(arreglo);

 const agregarElemento = () => {
   setArrego([...arreglo, (props.objeto.name) ])
 }




 
 
 // onClick={() => setAgregar (props.objeto.name) }

//  <ol>
//  {
//    arreglo.map(item=>{
//      return <li>{item} </li>
//    })
//  }
// </ol>




  
  
	return (
        <div className="card bg-dark text-white col-6 col-sm-2 my-3 mx-3">
       
  <img src="https://cdn1-www.comingsoon.net/assets/uploads/2015/02/starwarsbarcelebration.jpg" className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{props.objeto.name}</h5>
    <Link to={(props.tipo=="personaje"?"/pers/":(props.tipo=="naves"?"/nav/":(props.tipo=="paneta"?"plan":"hola")))+props.index} >
    <a  className="btn btn-warning" >Mas</a>
    </Link>
    <a  className="btn btn-outline-warning offset-md-2" onClick={agregarElemento} ><i className="fa fa-heart text-outline-dark" /></a>
  </div>
</div>
	);
};