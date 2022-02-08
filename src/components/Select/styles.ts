import styled from 'styled-components/native';

export const ContainerSelect = styled.View`
	position: absolute;
	z-index: 1;
	right: 0;
`;

export const Option = styled.TouchableOpacity<{
	visible: boolean;
}>`
	display: ${({ visible }) => (visible ? 'flex' : 'none')};
	align-items: flex-end;
	background-color: #fff;
	padding-left: 5px;
	padding-right: 5px;
	border-color: #8A8A8A;
	border-width: 1px;
	border-radius: 5px;
`;
