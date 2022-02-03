import { render, fireEvent } from '@testing-library/react-native';
import { TouchableOpacity } from 'react-native';

import Input from '../../../../src/components/Input';

import { Clean } from '../../../../src/utils/icons';

describe('Component Input', () => {
	test('should render the input component', () => {
		const { queryByPlaceholderText } = render(<Input placeholder="test" />);

		const input = queryByPlaceholderText('test');
		expect(input).toBeTruthy();
	});

	test('should input mask currency', () => {
		let value = '';
		const { queryByPlaceholderText } = render(
			<Input
				placeholder="currency"
				mask="currency"
				onChangeText={(text) => (value = text)}
				value={value}
			/>,
		);

		const input = queryByPlaceholderText('currency');
		expect(input).toBeTruthy();

		fireEvent.changeText(input, '150035');
		expect(value).toBe('R$ 1.500,35');
	});

	test('should clean text of input with right element', () => {
		let value = '';
		const { queryByPlaceholderText, queryByTestId } = render(
			<Input
				placeholder="test"
				rightElement={
					<TouchableOpacity testID="clean" onPress={() => (value = '')}>
						<Clean width={20} height={20} />
					</TouchableOpacity>
				}
				onChangeText={(text) => (value = text)}
				value={value}
			/>,
		);

		const input = queryByPlaceholderText('test');
		expect(input).toBeTruthy();

		fireEvent.changeText(input, 'test');
		expect(value).toBe('test');

		const buttonClean = queryByTestId('clean');
		fireEvent.press(buttonClean);
		expect(value).toBe('');
	});

	test('should input error', () => {
		const { getByText } = render(<Input placeholder="test" error="test" />);

		const error = getByText(/test/i);
		expect(error).toBeTruthy();
	});
});
