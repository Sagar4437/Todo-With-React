import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className="header-flex">
				<h1>TODO Application</h1>
				<Link to="/new-todo">
					<button>+ Add New</button>
				</Link>
			</div>
			<div className="row header">
				<div>Sr No</div>
				<div>Todos</div>
				<div>Done</div>
				<div>Action</div>
			</div>
		</>
	);
};

export default Header;
