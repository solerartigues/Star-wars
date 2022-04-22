import React from "react";
import { Link } from "react-router-dom";

export const Cards = (props) => {
  
  
	return (
        <div className="card bg-dark text-white col-6 col-sm-2 my-3 mx-3">
  <img src="https://cdn1-www.comingsoon.net/assets/uploads/2015/02/starwarsbarcelebration.jpg" className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{props.objeto.name}</h5>
    
    <a  className="btn btn-warning" >Mas</a>
    <a  className="btn btn-outline-warning offset-md-2"><i className="fa fa-heart text-outline-dark" /></a>
  </div>
</div>
	);
};