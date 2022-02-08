import { render } from '@testing-library/react-native';

import Products from '../../../../src/components/Products';

describe('Component Products', () => {
	test('should have component products', () => {
		const { getByTestId } = render(<Products search="" />);
		const component = getByTestId('componentProducts');
		expect(component).toBeTruthy();
	});
});
