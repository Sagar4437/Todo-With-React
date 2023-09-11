import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllTodo } from "./API/API";

const App = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		getAllTodo().then((data) => setApiData(data));
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home {...{ apiData, setApiData }} />}
				/>
				<Route
					path="/new-todo"
					element={<Form {...{ apiData, setApiData }} />}
				/>
				<Route
					path="/edit-todo"
					element={<Form {...{ apiData, setApiData }} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
