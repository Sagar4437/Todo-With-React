import React from "react";
import { deleteTodoAPI, updateTodoAPI } from "../API/API";
import { Link } from "react-router-dom";

const Body = ({ todo, apiData, setApiData }) => {
	const markCompleted = () => {
		todo.isCompleted = !todo.isCompleted;
		updateTodoAPI(todo).then((res) => {
			if (res.status === 200) {
				const idx = apiData.findIndex((item) => item.id === todo.id);
				const newData = [...apiData];
				newData.splice(idx, 1, todo);
				setApiData([...newData]);
			}
		});
	};

	const deleteTodo = () => {
		deleteTodoAPI(todo).then((response) => {
			if (response.status === 200) {
				const idx = apiData.findIndex((item) => item.id === todo.id);
				const newData = [...apiData];
				newData.splice(idx, 1);
				setApiData([...newData]);
			}
		});
	};

	return (
		<div className="row">
			<div>{todo.id}</div>
			<div>
				{todo.isCompleted ? (
					<s>{todo.description}</s>
				) : (
					todo.description
				)}
			</div>
			<div>
				<input
					type="checkbox"
					className="checkbox"
					checked={todo.isCompleted}
					onChange={markCompleted}
				/>
			</div>
			<div>
				<Link to={"/edit-todo"} state={{ todo }}>
					<button>Edit</button>
				</Link>
				<button onClick={deleteTodo}>Delete</button>
			</div>
		</div>
	);
};

export default Body;
