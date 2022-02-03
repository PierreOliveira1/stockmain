import { maskCurrency, unmaskCurrency } from '../../../../src/utils/masks';

describe('Masks', () => {
	test('should return value of formated currency', () => {
		const value = '1500.35';
		const expected = 'R$ 1.500,35';
		const result = maskCurrency(value);
		expect(result).toBe(expected);
	});

	test('should return number value of the mask', () => {
		const value = 'R$ 1.500,35';
		const expected = 1500.35;
		const result = unmaskCurrency(value);
		expect(result).toBe(expected);
	});
});
