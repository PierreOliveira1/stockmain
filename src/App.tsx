import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
	const [count, setCount] = useState(0);

	const addCount = () => {
		setCount(count + 1);
	};

	return (
		<View style={styles.container}>
			<Text>Hello World!!!</Text>
			<Text testID="count">{count}</Text>
			<TouchableOpacity testID="buttonAddCount" onPress={addCount}>
				<Text>Add</Text>
			</TouchableOpacity>
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
