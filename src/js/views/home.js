import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		<div class="jumbotron personajes">
     <h1 class="titulo display-2 my-4 mx-4">Personajes</h1>
     <p class="lead my-4 mx-4"></p>
     <hr class="my-4"/>
     <Link to="/personajes">
     <a class="btn btn-warning btn-lg my-4 mx-4" href="#" role="button">Go!</a>
     </Link>
    </div>
    <div class="jumbotron naves">
     <h1 class="titulo display-2 my-4 mx-4">Naves</h1>
     <p class="lead my-4 mx-4"></p>
     <hr class="my-4"/>
     <Link to="/naves">
     <a class="btn btn-warning btn-lg my-4 mx-4" href="#" role="button">Go!</a>
     </Link>
    </div>
    <div class="jumbotron planetas">
     <h1 class="titulo display-2 my-4 mx-4">Planetas</h1>
     <p class="lead my-4 mx-4"></p>
     <hr class="my-4"/>
     <Link to="/planetas">
     <a class="btn btn-warning btn-lg my-4 mx-4" href="#" role="button">Go!</a>
     </Link>
    </div>

	
	</div>
);
