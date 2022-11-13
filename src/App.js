import React from "react";
import Navbar from "./components/Navbar/navbar";
import RoutesComponent from "./routes";

const App = () => {
	return (
		<div className="container">
			<Navbar />
			<RoutesComponent />
		</div>
	);
};

export default App;
