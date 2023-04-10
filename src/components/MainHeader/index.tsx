import React, { useMemo } from "react";

import emojisList from "../../utils/emojis";
import ToggleBtn from "../Toggle";

import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
	const selectedEmoji = useMemo(() => {
		const i = Math.floor(Math.random() * emojisList.length);

		return emojisList[i];
	}, []);

	return (
		<Container>
			<ToggleBtn />

			<Profile>
				<Welcome>Olá, {selectedEmoji}</Welcome>
				<UserName>Eduardo!</UserName>
			</Profile>
		</Container>
	);
};

export default MainHeader;
