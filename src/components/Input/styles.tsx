import styled from 'styled-components/native';

export const Container = styled.View<{
	width?: string;
	height?: string;
	shadowColor?: string;
	borderColor?: string;
}>`
	width: ${({ width }) => width || '90%'};
	height: ${({ height }) => height || '55px'};
	background-color: #fff;
	elevation: 6;
	shadow-color: ${({ shadowColor }) => shadowColor || '#000'};
	shadow-offset: 0px 0px;
	shadow-opacity: 0.25;
	shadow-radius: 2px;
	border-radius: 10px;
	border-width: 1px;
	border-color: ${({ borderColor }) => borderColor || 'transparent'};
	flex-direction: row;
`;

export const TextInput = styled.TextInput<{
	width?: string;
	height?: string;
}>`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '100%'};
	padding-left: 5%;
	font-size: 14px;
`;

export const RightElement = styled.View`
	width: 20%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const Error = styled.Text`
	color: #df0000;
	font-size: 12px;
	padding-left: 5%;
`;
