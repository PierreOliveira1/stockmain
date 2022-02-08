import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Input from './components/Input';
import AddProductForm from './components/AddProductForm';
import Products from './components/Products';

import { Box, Container } from './styles';

import { Clean } from './utils/icons';

import ProductsProvider from './contexts/ProductsProvider';

const App = () => {
	const [search, setSearch] = useState<string>('');

	return (
		<ProductsProvider>
			<Container>
				<Box width="100%" height="10%" justifyContent="center">
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
										onPress={() => {
											setSearch('');
										}}
									>
										<Clean width={20} height={20} />
									</TouchableOpacity>
								) : undefined
							}
						/>
					</Box>
				</Box>
				<Box
					width="100%"
					height="90%"
					flexDirection="column"
					alignItems="center"
					justifyContent="space-between"
				>
					{search.length === 0 && <AddProductForm />}

					<Box
						width="100%"
						marginTop={search.length === 0 ? '1%' : '5%'}
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
					>
						<Products search={search} />
					</Box>
				</Box>
			</Container>
		</ProductsProvider>
	);
};

export default App;
