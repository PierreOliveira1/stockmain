import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Input from './components/Input';

import { Clean } from './utils/icons';

const App = () => {
	const [value, setValue] = useState('');

	return (
		<View style={styles.container}>
			<Input
				placeholder="Valor unitário"
				onChangeText={(text) => {
					setValue(text);
				}}
				value={value}
				rightElement={
					<TouchableOpacity testID="clean" onPress={() => setValue('')}>
						<Clean width={20} height={20} />
					</TouchableOpacity>
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
});

export default App;
