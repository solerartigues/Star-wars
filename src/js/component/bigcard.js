import React from "react";
import "../../styles/bigcard.css";

export const Bigcard = () => {
	return (
        <div className="row bigcard">
            <img className="col-6 fotobig" src="https://cdn1-www.comingsoon.net/assets/uploads/2015/02/starwarsbarcelebration.jpg"></img>
            <div className="col-6 textobig">
                <h3>Descripcion</h3>
                <h3>Nombre</h3>
                <h3>Pelicula</h3>
                <h3>Ubicacion</h3>
                


            </div>
        </div>
	);
};