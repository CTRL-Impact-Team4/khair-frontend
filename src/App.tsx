import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
	return (
		<main className="min-h-screen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
