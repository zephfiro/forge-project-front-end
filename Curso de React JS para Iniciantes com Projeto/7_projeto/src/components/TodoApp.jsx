import { useState } from "react";

import "./TodoApp.css";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTodo.trim() === "") return;

        setTodos((prev) => [
            ...prev,
            newTodo.trim()
        ]);

        setNewTodo("");
    }

    return (
        <div>
            <h1 className="title">Lista de Tarefas</h1>

            <form onSubmit={handleSubmit} className="todo-form">
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="todo-input"
                />
                <button
                    type="submit"
                    className="todo-button"
                >
                    Adicionar
                </button>
            </form>

            {todos.length > 0 ? (
                <ul className="todo-list">
                    {todos.map((todo, index) => (
                        <li key={index} className="todo-item">
                            {todo}
                            <button
                                onClick={() => setTodos((prev) => prev.filter((_, i) => i !== index))}
                            >
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="empty-list">Nenhuma tarefa adicionada</p>
            )}
        </div>
    )
}

export default TodoApp