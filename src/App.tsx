import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import ReadyToStart from './components/ReadyToStart/ReadyToStart';
import { Home } from './Pages/Index';

const App = () => {
	return (
		<div>
			<Header />
			{/* The Page element must contain in ther styles a padding top: 100px */}
			<div className="main-container" style={{ marginTop: '-120px' }}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
			<ReadyToStart />
			<Footer />
		</div>
	);
};

export default App;
