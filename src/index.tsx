import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import App from './App';

const Root = () => (
	<>
		<StatusBar backgroundColor="#FFF" style="dark" translucent={false} />
		<App />
	</>
);

export default registerRootComponent(Root);
