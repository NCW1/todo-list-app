import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

function TodoList({ todos, deleteTodo }) {
	return (
		<ul className="list-group">
			{todos.map((todo, index) => (
				<li
					key={index}
					className="list-group-item d-flex align-items-center justify-content-between"
				>
					<span>{todo}</span>
					<Button variant="danger" onClick={() => deleteTodo(index)}>
						Delete
					</Button>
				</li>
			))}
		</ul>
	);
}

function App() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	function addTodo() {
		setTodos([...todos, newTodo]);
		setNewTodo("");
	}

	function deleteTodo(index) {
		setTodos(todos.filter((_, i) => i !== index));
	}

	return (
		<div className="container">
			<div className="text-center button-container">
				<input
					type="text"
					value={newTodo}
					onChange={(event) => setNewTodo(event.target.value)}
					className="form-control input-field"
				/>
				<Button variant="primary" className="mt-4" onClick={addTodo}>
					Add Task
				</Button>
			</div>
			<TodoList todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
