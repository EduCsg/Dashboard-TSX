import React from "react";
import { Container, ToggleLabel, Switcher } from "./styles";

const ToggleBtn: React.FC = () => (
	<Container>
		<ToggleLabel>Light</ToggleLabel>
		<Switcher
			checked
			uncheckedIcon={false}
			checkedIcon={false}
			onChange={() => {}}
		/>
		<ToggleLabel>Dark</ToggleLabel>
	</Container>
);

export default ToggleBtn;
