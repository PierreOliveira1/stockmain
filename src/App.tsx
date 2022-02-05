import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Input from './components/Input';

import { Box, Container, Form, Submit, Text } from './styles';

import { Clean } from './utils/icons';

const App = () => {
	const [search, setSearch] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [errorName, setErrorName] = useState<string | undefined>(undefined);
	const [valueUnitary, setValueUnitary] = useState<string>('');
	const [errorValueUnitary, setErrorValueUnitary] = useState<
		string | undefined
	>(undefined);
	const [valueTotal, setValueTotal] = useState<string>('');
	const [errorValueTotalStock, setErrorValueTotalStock] = useState<
		string | undefined
	>(undefined);

	const verifyErrors = () => {
		if (name === '') setErrorName('Nome inválido');
		else setErrorName(undefined);

		if (valueUnitary === '') setErrorValueUnitary('Valor inválido');
		else setErrorValueUnitary(undefined);

		if (valueTotal === '' || Number(valueTotal) === 0)
			setErrorValueTotalStock('Quantidade inválida');
		else setErrorValueTotalStock(undefined);

		if (errorName || errorValueUnitary || errorValueTotalStock) return true;

		return false;
	};

	const isSubmit = () => {
		if (name === '' || valueUnitary === '' || valueTotal === '') return false;
		return true;
	};

	const handleSubmit = () => {
		const isError = verifyErrors();
	};

	return (
		<Container>
			<Box width="90%" marginTop="5%">
				<Input
					width="100%"
					placeholder="Pesquisar produto..."
					onChangeText={(text: string) => {
						setSearch(text);
					}}
					value={search}
					rightElement={
						search.length > 0 ? (
							<TouchableOpacity
								testID="cleanInputSearch"
								onPress={() => setSearch('')}
							>
								<Clean width={20} height={20} />
							</TouchableOpacity>
						) : undefined
					}
				/>
			</Box>
			{search.length === 0 && (
				<Form marginTop="10%" alignItems="flex-end">
					<Input
						width="100%"
						height="45px"
						placeholder="Nome..."
						onChangeText={(text: string) => setName(text)}
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
							onChangeText={(text: string) => setValueUnitary(text)}
							value={valueUnitary}
							error={errorValueUnitary}
						/>
						<Input
							width="57%"
							height="45px"
							placeholder="Quantidade em estoque..."
							mask="number"
							keyboardType="numeric"
							onChangeText={(text: string) => setValueTotal(text)}
							value={valueTotal}
							error={errorValueTotalStock}
						/>
					</Box>
					<Submit
						backgroundColor={isSubmit() ? '#0047FF' : '#8A8A8A'}
						onPress={handleSubmit}
					>
						<Text fontFamily="Poppins_700Bold">Adicionar produto</Text>
					</Submit>
				</Form>
			)}
		</Container>
	);
};

export default App;
