import styled from "styled-components";

/*  Layout

  - MainHeader (MH)
  - Aside (AS)
  - Content (CT)     */

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 250px auto; // primeira coluna 250px e o resto automatico (max)
	grid-template-rows: 70px auto; // primeira linha 70px e o resto automatico (max)

	grid-template-areas:
		"AS MH"
		"AS CT";

	height: 100vh;
`;
