import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Select from '../Select';
import Product from '../Product';

import { Box, Text } from '../../styles';

import { maskValueTotal, unmaskCurrency } from '../../utils/masks';
import {
	decrementStock,
	deleteProduct,
	incrementStock,
	searchProduct,
} from '../../utils/product';

import ProductsProps from '../../@types/products';

import { useProducts } from '../../contexts/ProductsProvider';
import { SadEmoji } from '../../utils/icons';

type Props = {
	search: string;
};

const Products = ({ search }: Props): JSX.Element => {
	const [selected, setSelected] = useState<string>('');
	const { products, setProducts } = useProducts();
	const [productsFiltered, setProductsFiltered] = useState<
		Array<ProductsProps>
	>([]);

	useLayoutEffect(() => {
		const getSelected = async () => {
			const result = await AsyncStorage.getItem('@selected');

			result ? setSelected(result) : setSelected('Identificador');
		};

		getSelected();
	}, []);

	useEffect(() => {
		const saveSelected = async () => {
			await AsyncStorage.setItem('@selected', selected);
		};

		saveSelected();
	}, [selected]);

	useEffect(() => {
		search.length === 0
			? setProductsFiltered([])
			: setProductsFiltered(searchProduct(products, search));
	}, [search]);

	return (
		<>
			<Box width="90%" marginBottom="3%">
				{search.length === 0 && (
					<Box width="100%" justifyContent="space-between">
						<Text fontSize="16px" fontFamily="Poppins_600SemiBold" color="#000">
							Produtos
						</Text>
						<Select selected={selected} setSelected={setSelected} />
					</Box>
				)}
			</Box>
			{search.length !== 0 && productsFiltered.length !== 0 ? (
				<FlatList
					testID="componentProducts"
					style={{
						width: '100%',
						height: '90%',
					}}
					contentContainerStyle={{
						alignItems: 'center',
					}}
					data={
						productsFiltered.length === 0 && search.length === 0
							? products
							: productsFiltered
					}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item: { id, name, valueUnitary, valueStock } }) => (
						<Product
							name={name}
							valueUnitary={valueUnitary}
							valueTotal={maskValueTotal(
								`${unmaskCurrency(valueUnitary) * parseInt(valueStock)}`,
							)}
							valueStock={valueStock}
							increment={() => setProducts(incrementStock(products, id))}
							decrement={() => setProducts(decrementStock(products, id))}
							deleteItem={() => setProducts(deleteProduct(products, id))}
						/>
					)}
				/>
			) : (
				<FlatList
					testID="componentProducts"
					style={{
						width: '100%',
						height: '60%',
					}}
					contentContainerStyle={{
						alignItems: 'center',
					}}
					data={
						productsFiltered.length === 0 && search.length === 0
							? products
							: productsFiltered
					}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item: { id, name, valueUnitary, valueStock } }) => (
						<Product
							name={name}
							valueUnitary={valueUnitary}
							valueTotal={maskValueTotal(
								`${unmaskCurrency(valueUnitary) * parseInt(valueStock)}`,
							)}
							valueStock={valueStock}
							increment={() => setProducts(incrementStock(products, id))}
							decrement={() => setProducts(decrementStock(products, id))}
							deleteItem={() => setProducts(deleteProduct(products, id))}
						/>
					)}
				/>
			)}
			{search.length !== 0 && productsFiltered.length === 0 && (
				<Box
					width="100%"
					position="absolute"
					left="0"
					flexDirection="column"
					alignItems="center"
				>
					<Text fontFamily="Poppins_600SemiBold" color="#000">
						Nenhum produto encontrado
					</Text>
					<SadEmoji width={100} height={100} fill="#8A8A8A" />
				</Box>
			)}
		</>
	);
};

export default Products;
