export const API_URL = "http://localhost:3000/todos/";

export const getAllTodo = async () => {
	try {
		const data = await fetch(API_URL, {
			headers: {
				"content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});
		const json = await data.json();
		return json;
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const deleteTodoAPI = async (todo) => {
	const id = todo.id;
	const response = await fetch(API_URL + id, {
		method: "DELETE",
		headers: {
			"content-type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	});
	return response;
};

export const updateTodoAPI = async (todo) => {
	const response = await fetch(API_URL + todo.id, {
		method: "PUT",
		headers: {
			"content-type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(todo),
	});
	return response;
};

export const createTodoAPI = async (todo) => {
	const response = await fetch(API_URL, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(todo),
	});
	return response;
};