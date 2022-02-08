import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Box, Text } from '../../styles';
import { Container } from './styles';

import { Decrement, Increment, Trash } from '../../utils/icons';

export type ProductProps = {
	name: string;
	valueUnitary: string;
	valueStock: string;
	valueTotal: string;
	increment: () => void;
	decrement: () => void;
	deleteItem: () => void;
};

const Product = ({
	name,
	valueUnitary,
	valueStock,
	valueTotal,
	increment,
	decrement,
	deleteItem,
}: ProductProps): JSX.Element => (
	<Container>
		<Box
			width="80%"
			height="100%"
			flexDirection="column"
			justifyContent="space-around"
			paddingLeft="4%"
			paddingTop="1%"
			paddingBottom="1%"
		>
			<Text color="#000" fontFamily="Poppins_600SemiBold" fontSize="16px">
				{name}
			</Text>
			<Text color="#000" fontFamily="Poppins_600SemiBold" fontSize="13px">
				Valor unitário: {valueUnitary}
			</Text>
			<Text color="#000" fontFamily="Poppins_600SemiBold" fontSize="13px">
				Valor total: {valueTotal}
			</Text>
			<Box maxWidth="100%">
				<Text color="#000" fontFamily="Poppins_600SemiBold" fontSize="13px">
					Quantidade em estoque:{' '}
				</Text>
				<TouchableOpacity onPress={decrement}>
					<Decrement width={20} height={20} />
				</TouchableOpacity>
				<Text color="#000" fontFamily="Poppins_600SemiBold" fontSize="13px">
					{` ${valueStock} `}
				</Text>
				<TouchableOpacity onPress={increment}>
					<Increment width={20} height={20} />
				</TouchableOpacity>
			</Box>
		</Box>
		<Box width="20%" justifyContent="center" alignItems="center">
			<TouchableOpacity onPress={deleteItem}>
				<Trash width={35} height={35} fill="#DF0000" />
			</TouchableOpacity>
		</Box>
	</Container>
);

export default Product;
