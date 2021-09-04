import React from "react";

import { BoxInput } from "../BoxInput";
import { Feed } from "../Feed";

import * as GE from "../../styles/globalElements";

export const Main = () => {
	return (
		<GE.Container>
			<BoxInput />
			<Feed />
		</GE.Container>
	);
};
