import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const List = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div>
            <h5>My Todo List:</h5>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <p>{todo.title}</p>
                        <p>
                            Status: {todo.status ? "Completed" : "Imcomplete"}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
