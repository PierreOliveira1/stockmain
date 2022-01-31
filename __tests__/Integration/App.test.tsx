import { render, fireEvent } from '@testing-library/react-native';
import App from '../../src/App';

describe('App', () => {
	test('should get hello world in app', () => {
		const { getByText } = render(<App />);
		const textElement = getByText(/hello world/i);
		expect(textElement).toBeTruthy();
	});

	test('should get count 0 in app', () => {
		const { getByTestId, toJSON } = render(<App />);
		const count = getByTestId('count');
		expect(count.props.children).toBe(0);
		expect(toJSON()).toMatchSnapshot();
	});

	test('should get count 1 in app', () => {
		const { getByTestId, toJSON } = render(<App />);
		const buttonAdd = getByTestId('buttonAddCount');
		fireEvent.press(buttonAdd);
		const count = getByTestId('count');
		expect(count.props.children).toBe(1);
		expect(toJSON()).toMatchSnapshot();
	});
});
