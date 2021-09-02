import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

export const Routers = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />;
				<Route path="/signup" component={SignUp} />;
				<Route path="/" component={Home} />;
			</Switch>
		</Router>
	);
};
