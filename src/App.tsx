import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Add to Cart', '/shop', { item: 'merch', quantity: 1 });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Add Merch to Cart
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Apply Filter', '/products', { category: 'shoes', color: 'white' });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Apply Filter - White Shoes
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Apply Filter', '/products', { category: 'shoes', color: 'black' });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Apply Filter - Black Shoes
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Customize Item', '/customizer', { size: 'M', theme: 'pink', color: 'green' });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Customize Item - Size M, Pink Theme, Green Color
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Customize Item', '/customizer', { size: 'L', theme: 'blue' });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Customize Item - Size L, Blue Theme
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('User Interaction', '/', { action: 'greet', message: 'hello', status: true, id: 111 });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					User Interaction - Message "hello", Status True, ID 111
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('User Interaction', '/', { action: 'greet', message: 'hi', status: false, id: 222 });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					User Interaction - Message "hi", Status False, ID 222
				</button>
			</header>
		</div>
	);
}

export default App;
