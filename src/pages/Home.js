import React from "react";
import Header from "../Components/Header";
import Body from "../Components/Body";

const Home = ({ apiData, setApiData }) => {
	return (
		<div className="container">
			<Header />
			{apiData.map((todo) => {
				return (
					<Body
						key={todo.id}
						{...{ todo,apiData, setApiData }}
					/>
				);
			})}
		</div>
	);
};

export default Home;
