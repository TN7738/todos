import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const Nav = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="nav">
            <h4>Total Todos: {todos.length}</h4>
        </div>
    );
};

export default Nav;
