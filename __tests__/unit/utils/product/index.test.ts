import { incrementStock, decrementStock, addProduct, deleteProduct, newId, searchProduct, setAllProducts, getAllProducts } from "../../../../src/utils/product";

describe('Functions product', () => {
	let data = [
		{
			id: 1,
			name: 'Coca-Cola',
			valueUnitary: 'R$ 3,00',
			valueStock: '10',
		},
		{
			id: 2,
			name: 'Fanta',
			valueUnitary: 'R$ 3,00',
			valueStock: '10',
		},
		{
			id: 3,
			name: 'Guaraná',
			valueUnitary: 'R$ 3,00',
			valueStock: '10',
		},
		{
			id: 4,
			name: 'Suco de Laranja',
			valueUnitary: 'R$ 3,00',
			valueStock: '10',
		},
		{
			id: 5,
			name: 'Suco de Uva',
			valueUnitary: 'R$ 3,00',
			valueStock: '10',
		},
		{
			id: 6,
			name: 'Suco de Abacaxi',
			valueUnitary: 'R$ 3,00',
			valueStock: '10',
		},
	];

	test('should increment stock', () => {
		data = incrementStock(data, 5);
		const [result] = data.filter((item) => item.id === 5);
		expect(result.valueStock).toBe('11');
	});

	test('should decrement stock of product', () => {
		data = decrementStock(data, 5);
		const [result] = data.filter((item) => item.id === 5);
		expect(result.valueStock).toBe('10');
	});

	test('should add product', () => {
		data = addProduct(data, {
			id: 7,
			name: 'Suco de Maracujá',
			valueUnitary: 'R$ 3,00',
			valueStock: '10',
		});
		const [result] = data.filter((item) => item.id === 7);
		expect(result.name).toBe('Suco de Maracujá');
	});

	test('should delete product', () => {
		data = deleteProduct(data, 5);
		const [result] = data.filter((item) => item.id === 5);
		expect(result).toBe(undefined);
	});

	test('should add product and recicle id', () => {
		data = addProduct(data, {
			id: newId(data),
			name: 'Suco de Maracujá',
			valueUnitary: 'R$ 3,00',
			valueStock: '10',
		});
		const [result] = data.filter((item) => item.id === 5);
		expect(result.name).toBe('Suco de Maracujá');
	});

	test('should search product', () => {
		const result = searchProduct(data, 'Suco');
		expect(result.length).toBe(4);
	});
});
