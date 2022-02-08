import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import Input from '../Input';

import { Box, Text } from '../../styles';
import { Form, Submit } from './styles';

import { addProduct, newId } from '../../utils/product';

import { useProducts } from '../../contexts/ProductsProvider';

type ProductsProps = {
	id: number;
	name: string;
	valueUnitary: string;
	valueStock: string;
};

const AddProductForm = (): JSX.Element => {
	const [name, setName] = useState<string>('');
	const [errorName, setErrorName] = useState<string | undefined>(undefined);

	const [valueUnitary, setValueUnitary] = useState<string>('');
	const [errorValueUnitary, setErrorValueUnitary] = useState<
		string | undefined
	>(undefined);

	const [valueStock, setValueStock] = useState<string>('');
	const [errorValueTotalStock, setErrorValueTotalStock] = useState<
		string | undefined
	>(undefined);

	const { products, setProducts } = useProducts();

	const verifyErrors = () => {
		if (name === '') setErrorName('Nome inválido');
		else setErrorName(undefined);

		if (valueUnitary === '') setErrorValueUnitary('Valor inválido');
		else setErrorValueUnitary(undefined);

		if (valueStock === '' || Number(valueStock) === 0)
			setErrorValueTotalStock('Quantidade inválida');
		else setErrorValueTotalStock(undefined);

		if (!errorName || !errorValueUnitary || !errorValueTotalStock) return true;

		return false;
	};

	const isSubmit = () => {
		if (name === '' || valueUnitary === '' || valueStock === '') return false;
		return true;
	};

	const cleanInputs = () => {
		setName('');
		setValueUnitary('');
		setValueStock('');
	};

	const handleSubmit = () => {
		Keyboard.dismiss();
		const newProduct = {
			id: newId(products),
			name,
			valueUnitary,
			valueStock,
		} as ProductsProps;
		if (verifyErrors() && isSubmit()) {
			setProducts(addProduct(products, newProduct));
			cleanInputs();
		}
	};

	return (
		<Form testID="addProductForm" marginTop="10%" alignItems="flex-end">
			<Input
				width="100%"
				height="45px"
				placeholder="Nome..."
				onChangeText={(text: string) => {
					setName(text);
					setErrorName(undefined);
				}}
				value={name}
				error={errorName}
			/>
			<Box width="100%" marginTop="3%" justifyContent="space-between">
				<Input
					width="40%"
					height="45px"
					placeholder="Valor unitário..."
					mask="currency"
					keyboardType="numeric"
					onChangeText={(text: string) => {
						setValueUnitary(text);
						setErrorValueUnitary(undefined);
					}}
					value={valueUnitary}
					error={errorValueUnitary}
				/>
				<Input
					width="57%"
					height="45px"
					placeholder="Quantidade em estoque..."
					mask="number"
					keyboardType="numeric"
					onChangeText={(text: string) => {
						setValueStock(text);
						setErrorValueTotalStock(undefined);
					}}
					value={valueStock}
					error={errorValueTotalStock}
				/>
			</Box>
			<Submit
				testID="submitAddProduct"
				backgroundColor={isSubmit() ? '#0047FF' : '#8A8A8A'}
				onPress={handleSubmit}
			>
				<Text fontFamily="Poppins_700Bold">Adicionar produto</Text>
			</Submit>
		</Form>
	);
};

export default AddProductForm;
