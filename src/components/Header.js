import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const Header = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="header">
            <h3>Completed: {todos.filter((todo) => todo.status).length}</h3>
        </div>
    );
};

export default Header;
