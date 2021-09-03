import React from "react";

import { BoxInput } from "../BoxInput";
import { Feed } from "../Feed";

import * as GE from "../../styles/globalElements";
import * as S from "./styles";

export const Main = () => {
	return (
		<GE.Container>
			<BoxInput />
			<S.Line />
			<Feed />
		</GE.Container>
	);
};
