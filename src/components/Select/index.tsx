import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useProducts } from '../../contexts/ProductsProvider';

import { Text } from '../../styles';
import { orderProducts } from '../../utils/product';
import { ContainerSelect, Option } from './styles';

type Props = {
	selected: string;
	setSelected: (value: string) => void;
};

const Select = ({ selected, setSelected }: Props): JSX.Element => {
	const [visible, setVisible] = useState<boolean>(false);

	const { products, setProducts } = useProducts();

	const options = [
		'Identificador',
		'Nome',
		'Valor unitário',
		'Quantidade em estoque',
	];

	const handleSelect = (item: string, index: number) => {
		setSelected(item);
		setVisible(!visible);

		setProducts(orderProducts(products, index));
	};

	return (
		<ContainerSelect>
			<FlatList
				data={options}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item, index }) => (
					<Option
						visible={selected === item || visible}
						onPress={() => handleSelect(item, index)}
					>
						<Text color="#000" fontFamily="Poppins_600SemiBold">
							{item}
						</Text>
					</Option>
				)}
			/>
		</ContainerSelect>
	);
};

export default Select;
