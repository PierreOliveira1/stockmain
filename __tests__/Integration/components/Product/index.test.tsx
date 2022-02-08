import { render } from '@testing-library/react-native';

import Product from '../../../../src/components/Product';

describe('Component Product', () => {
	test('should have component product and values', () => {
		const { getByText } = render(
			<Product
				name="Produto 1"
				valueStock="10"
				valueUnitary="R$ 10,00"
				valueTotal="R$ 100,00"
				increment={() => {}}
				decrement={() => {}}
				deleteItem={() => {}}
			/>,
		);

		const name = getByText('Produto 1');
		expect(name).toBeTruthy();

		const valueStock = getByText('10');
		expect(valueStock).toBeTruthy();

		const valueUnitary = getByText('Valor unitário: R$ 10,00');
		expect(valueUnitary).toBeTruthy();

		const valueTotal = getByText('Valor total: R$ 100,00');
		expect(valueTotal).toBeTruthy();
	});
});
