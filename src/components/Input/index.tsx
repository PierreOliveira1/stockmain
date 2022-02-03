import React from 'react';
import { KeyboardTypeOptions, View } from 'react-native';

import { Container, Error, RightElement, TextInput } from './styles';

import { maskCurrency } from '../../utils/masks';

interface Props {
	placeholder: string;
	width?: string;
	height?: string;
	keyboardType?: KeyboardTypeOptions;
	rightElement?: JSX.Element;
	mask?: 'currency';
	onChangeText?: (text: string) => void;
	value?: string;
	error?: string;
}

const Input = ({
	placeholder,
	width,
	height,
	keyboardType,
	rightElement,
	mask,
	onChangeText,
	value,
	error,
}: Props): JSX.Element => {
	const handleChangeText = (text: string) => {
		if (mask === 'currency' && onChangeText) {
			const textMask = maskCurrency(text);
			onChangeText(textMask);
		} else if (onChangeText) {
			onChangeText(text);
		}
	};

	const onFocus = () => {
		if (mask === 'currency') handleChangeText('000');
	};

	return (
		<View>
			<Container
				width={width}
				height={height}
				shadowColor={error ? '#DF0000' : '#000'}
				borderColor={error ? '#DF0000' : 'transparent'}
			>
				<TextInput
					width={rightElement ? '80%' : '100%'}
					placeholder={placeholder}
					placeholderTextColor="#8A8A8A"
					keyboardType={keyboardType}
					onChangeText={handleChangeText}
					value={value}
					onFocus={onFocus}
				/>
				{rightElement && <RightElement>{rightElement}</RightElement>}
			</Container>
			{error && <Error>{error}</Error>}
		</View>
	);
};

export default Input;
