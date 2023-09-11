import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createTodoAPI, updateTodoAPI } from "../API/API";

const Form = ({ apiData, setApiData }) => {
	const [newTodo, setNewTodo] = useState("");
	const navigate = useNavigate();

	const location = useLocation();

	useEffect(() => {
		const todo = location.state?.todo;
		if (todo) {
			setNewTodo(todo.description);
		}
	}, []);

	const submitData = async () => {
		const data = {
			id: Date.now(),
			description: newTodo,
			isCompleted: false,
		};
		// submit to API
		const res = await createTodoAPI(data);
		if (res.status === 201) {
			// submit to state
			setApiData([...apiData, data]);
			setNewTodo("");
			navigate("/");
		}
	};

	const updateData = async () => {
		const todo = location.state?.todo;
		if (todo === undefined) {
			alert("You can not edit this todo, because todo is empty");
			navigate("/");
			return;
		}
		todo.description = newTodo;
		const res = await updateTodoAPI(todo);
		if (res.status === 200) {
			// submit to state
			const idx = apiData.findIndex((item) => item.id === todo.id);
			const newData = [...apiData];
			newData.splice(idx, 1, todo);
			setApiData([...newData]);
			setNewTodo("");
			navigate("/");
		}
	};

	return (
		<div className="container">
			<h1>
				{location.pathname === "/edit-todo" ? "Edit Todo" : "New Todo"}
			</h1>
			<textarea
				cols="50"
				rows="5"
				id="textarea"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<Link to="/">
				<button>Cancel</button>
			</Link>
			{location.pathname === "/edit-todo" ? (
				<button onClick={() => updateData()}>Update Todo </button>
			) : (
				<button onClick={() => submitData()}>Add Todo </button>
			)}
		</div>
	);
};

export default Form;
