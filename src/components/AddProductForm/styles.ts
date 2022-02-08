import styled from 'styled-components/native';

export const Form = styled.View<{
	width?: string;
	marginTop?: string;
	alignItems?: string;
}>`
	display: flex;
	width: ${({ width }) => width || '90%'};
	margin-top: ${({ marginTop }) => marginTop || '0'};
	align-items: ${({ alignItems }) => alignItems || 'center'};
`;

export const Submit = styled.TouchableOpacity<{
	backgroundColor?: string;
}>`
	width: 160px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ backgroundColor }) => backgroundColor || '#0047FF'};
	border-radius: 20px;
	margin-top: 3%;
`;
