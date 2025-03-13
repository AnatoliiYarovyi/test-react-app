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
						window.stonks.event('test', '/', {
							dialect: 'sqlite',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					test dialect: 'sqlite'
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('test-2', '/', {
							dialect: 'sqlite',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					test-2 dialect: 'sqlite'
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Apply Filter', '/products', {
							theme: 'white',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Apply Filter - White Shoes
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Apply Filter', '/products', {
							theme: 'black',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Apply Filter - Black Shoes
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Start Free Trial', '/pricing');
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Start 14-day Free Trial
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Use Filter Menu', '/dashboard', {
							filterType: 'category',
							value: 'clothing',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Filter Products - Category "Clothing"
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Use Filter Menu', '/dashboard', {
							filterType: 'price',
							value: 'under-50',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Filter Products - Price "Under $50"
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Pricing', '/pricing', {
							theme: 'black',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Pricing - Black Theme
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Add to Wishlist', '/products/123', {
							itemId: 'PREMIUM-SNEAKERS',
							category: 'Footwear',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Add Sneakers to Wishlist
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Complete Onboarding', '/welcome', {
							stepCompleted: 5,
							totalSteps: 7,
							userId: 'U-12345',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Finish Onboarding Step 5/7
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Submit Feedback', '/contact', {
							feedbackType: 'feature-request',
							message: 'Dark mode option',
							rating: 4,
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Submit Feature Request
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event(
							'Download PDF documentation',
							'/resources/789',
							{
								fileType: 'pdf',
								fileSize: '2.4MB',
								topic: 'React Best Practices',
							}
						);
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Download React PDF Guide
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Change Theme Settings', '/settings', {
							theme: 'dark',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Enable Dark Mode
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Upgrade Account', '/account/billing', {
							currentPlan: 'basic',
							newPlan: 'pro',
							paymentMethod: 'credit_card',
						});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Upgrade to PRO Plan
				</button>
			</header>
		</div>
	);
}

export default App;
