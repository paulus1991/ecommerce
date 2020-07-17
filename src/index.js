import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Hashrouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { ProductProvider } from './context';

ReactDOM.render(
	<ProductProvider>
		<Router basename={process.env.PUBLIC_URL}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</ProductProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
