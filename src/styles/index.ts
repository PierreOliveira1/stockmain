import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	width: 100%;
	height: 100%;
	background-color: #fff;
	align-items: center;
`;

export const Box = styled.View<{
	width?: string;
	maxWidth?: string;
	height?: string;
	justifyContent?: string;
	alignItems?: string;
	flexDirection?: string;
	position?: string;
	top?: string;
	left?: string;
	marginLeft?: string;
	marginTop?: string;
	marginBottom?: string;
	paddingLeft?: string;
	paddingTop?: string;
	paddingBottom?: string;
	elevation?: number;
	shadowColor?: string;
	borderRadius?: string;
	borderColor?: string;
}>`
	display: flex;
	width: ${({ width }) => width || 'auto'};
	max-width: ${({ maxWidth }) => maxWidth || '100%'};
	height: ${({ height }) => height || 'auto'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || 'flex-start'};
	flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
	position: ${({ position }) => position || 'relative'};
	top: ${({ top }) => top || 'auto'};
	left: ${({ left }) => left || 'auto'};
	margin-left: ${({ marginLeft }) => marginLeft || '0'};
	margin-top: ${({ marginTop }) => marginTop || '0'};
	margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
	padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
	padding-top: ${({ paddingTop }) => paddingTop || '0'};
	padding-bottom: ${({ paddingBottom }) => paddingBottom || '0'};
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
