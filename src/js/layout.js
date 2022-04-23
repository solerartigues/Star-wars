import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Personajes from "./views/personajes.js";
import Naves from "./views/naves.js";
import Nav from "./views/nav.js";
import Planetas from "./views/planetas.js";
import Pers from "./views/pers.js";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/personajes">
							<Personajes />
						</Route>
						<Route exact path="/pers/:uid">
							<Pers />
						</Route>
						<Route exact path="/pers">
							<Pers />
						</Route>
						<Route exact path="/naves">
							<Naves />
						</Route>	
						<Route exact path="/nav/:uid">
							<Nav />
						</Route>
						<Route exact path="/planetas">
							<Planetas />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
