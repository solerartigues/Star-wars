import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container">
     <a className="navbar-brand" href="#">
      <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" alt=""  height="48"/>
     </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
		  
        <li className="nav-item">
		<Link to="/">
          <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
		</Link>
        </li>
        <li className="nav-item">
		<Link to="/personajes">
          <a className="nav-link active fw-bold" href="#">Personajes</a>
		</Link>  
        </li>
        <li className="nav-item">
		<Link to="/naves">
          <a className="nav-link active fw-bold" href="#">Naves</a>
		</Link> 
        </li>
        
      </ul>
    </div>
    <div className="nav-item dropdown justify-content-end">
          <button className="btn btn-outline-warning" type="button" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos <i className="fa fa-heart text-outline-warning" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
  </div>
</nav>
		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
