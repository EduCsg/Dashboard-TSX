import styled from "styled-components";

export const Container = styled.div`
	grid-area: AS;
	/* background-color: ${(props) => props.theme.colors.secondary}; */

	padding-left: 20px;
	color: ${(props) => props.theme.colors.white};

	border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
	display: flex;
	padding: 12px 30px 12px 10px;
	align-items: center;
	justify-content: space-around;
	height: 70px;
`;

export const LogImg = styled.img`
	width: 40px;
`;

export const Title = styled.h3`
	color: ${(props) => props.theme.colors.white};
`;

export const MenuContainer = styled.nav`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

export const MenuItemLink = styled.a`
	text-decoration: none;
	color: ${(props) => props.theme.colors.info};

	transition: opacity 0.2s;

	display: flex;
	align-items: center;

	&:hover {
		opacity: 0.7;
	}

	> svg {
		font-size: 18px;
		margin-right: 5px;
	}
`;
