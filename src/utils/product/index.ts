import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductsProps from '../../@types/products';
import { unmaskCurrency } from '../masks';

export const incrementStock = (data: ProductsProps[], id: number): ProductsProps[] => {
	const newData = data.map((item: ProductsProps) => item.id === id ?  { ...item, valueStock: `${parseInt(item.valueStock) + 1}` } : item);
	return newData;
};

export const decrementStock = (data: ProductsProps[], id: number): ProductsProps[] => {
	const newData = data.map((item: ProductsProps) => item.id === id ?  { ...item, valueStock: `${parseInt(item.valueStock) - 1}` } : item);
	return newData;
}

export const deleteProduct = (data: ProductsProps[], id: number): ProductsProps[] => {
	const newData = data.filter((item: ProductsProps) => item.id !== id);
	return newData;
}

export const addProduct = (data: ProductsProps[], product: ProductsProps): ProductsProps[] => {
	const newData = [...data, product];
	return newData;
}

export const newId = (data: ProductsProps[]): number => {
	let id = 1;
	data.map((item: ProductsProps) => {
		if (item.id === id) id = id + 1;
	});
	return id;
}

export const setAllProducts = async (data: ProductsProps[]) =>
	await AsyncStorage.setItem('@products', JSON.stringify(data));

export const getAllProducts = async (): Promise<ProductsProps[]> => {
	const products = await AsyncStorage.getItem('@products')
	return products ? JSON.parse(products) : [];
};

export const searchProduct = (data: ProductsProps[], search: string): ProductsProps[] => {
	const regex = new RegExp(search, 'i');
	const newData = data.filter((item: ProductsProps) => item.name.match(regex));
	return newData;
};

export const orderProducts = (data: ProductsProps[], option: number): ProductsProps[] => {
	const options: string[] = [
		'id',
		'name',
		'valueUnitary',
		'valueStock',
	];
	const newData = data.sort((a: any, b: any) => {
		switch(options[option]) {
			case 'valueUnitary':
				return unmaskCurrency(a[options[option]]) > unmaskCurrency(b[options[option]]) ? 1 : -1;
			case 'valueStock':
				return parseInt(a[options[option]]) > parseInt(b[options[option]]) ? 1 : -1;
			default:
				return a[options[option]] > b[options[option]] ? 1 : -1;
		}
	});

	return newData;
};
