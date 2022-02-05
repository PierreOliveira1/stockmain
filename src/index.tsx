import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import {
	Poppins_400Regular,
	Poppins_700Bold,
	Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { loadAsync } from 'expo-font';

import App from './App';

const Root = () => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useLayoutEffect(() => {
		loadAsync({
			Poppins_400Regular,
			Poppins_700Bold,
			Poppins_600SemiBold,
		}).then(() => setFontsLoaded(true));
	}, []);

	if (!fontsLoaded) return <AppLoading />;

	return (
		<>
			<StatusBar backgroundColor="#FFF" style="dark" translucent={false} />
			<App />
		</>
	);
};

export default registerRootComponent(Root);
