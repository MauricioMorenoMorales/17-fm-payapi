import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home } from './Pages/Index';

const App = () => {
	return (
		<div>
			<Header />
			<div className="main-container" style={{ marginTop: '-100px' }}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
