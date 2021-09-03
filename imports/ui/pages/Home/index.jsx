import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React from "react";
import { useHistory } from "react-router-dom";

import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

export const Home = () => {
	const user = useTracker(() => Meteor.user());

	const history = useHistory();

	if (!user) {
		history.push("/login");
	}

	return (
		<>
			<Header email={user?.emails[0]?.address || ""} />
			<Main />
		</>
	);
};
