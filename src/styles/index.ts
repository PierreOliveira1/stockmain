import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	width: 100%;
	height: 100%;
	background-color: #fff;
	align-items: center;
`;

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

export const Box = styled.View<{
	width?: string;
	height?: string;
	justifyContent?: string;
	alignItems?: string;
	flexDirection?: string;
	marginTop?: string;
}>`
	display: flex;
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || 'flex-start'};
	flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
	margin-top: ${({ marginTop }) => marginTop || '0'};
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

export const Text = styled.Text<{
	fontFamily?: string;
	fontSize?: string;
	color?: string;
}>`
	color: ${({ color }) => color || '#fff'};
	font-family: ${({ fontFamily }) => fontFamily || 'Poppins_400Regular'};
	font-size: ${({ fontSize }) => fontSize || '14px'};
`;
