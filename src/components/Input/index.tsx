import React from 'react';
import { Keyboard, KeyboardTypeOptions } from 'react-native';

import {
	InputContainer,
	Error,
	RightElement,
	TextInput,
	Container,
} from './styles';

import { maskCurrency, maskNumber } from '../../utils/masks';

interface Props {
	placeholder: string;
	width?: string;
	height?: string;
	keyboardType?: KeyboardTypeOptions;
	rightElement?: JSX.Element;
	mask?: 'currency' | 'number';
	onChangeText?: (text: string) => void;
	onSubmitEditing?: () => void;
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
	onSubmitEditing,
	onChangeText,
	value,
	error,
}: Props): JSX.Element => {
	const handleChangeText = (text: string) => {
		if (onChangeText)
			switch (mask) {
				case 'currency':
					onChangeText(maskCurrency(text));
					break;
				case 'number':
					onChangeText(maskNumber(text));
					break;
				default:
					onChangeText(text);
			}
	};

	const onFocus = () => {
		if (mask === 'currency' && value === '') handleChangeText('000');
	};

	return (
		<Container width={width}>
			<InputContainer
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
					onSubmitEditing={onSubmitEditing || Keyboard.dismiss}
					value={value}
					onFocus={onFocus}
				/>
				{rightElement && <RightElement>{rightElement}</RightElement>}
			</InputContainer>
			{error && <Error>{error}</Error>}
		</Container>
	);
};

export default Input;
