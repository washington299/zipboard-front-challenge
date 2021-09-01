import React from "react";

import { Routers } from "./router/router";

import GlobalStyles from "./styles/globals";

export const App = () => (
	<>
		<Routers>
			<GlobalStyles />

			<h1>Welcome to Meteor!</h1>
		</Routers>
	</>
);
