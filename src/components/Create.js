import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const Create = () => {
    const { todos, setTodos } = useContext(TodoContext);

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState(false);

    const handleOnSubmit = (evt) => {
        evt.preventDefault();

        const newTodo = {
            id: todos.length + 1,
            title: title,
            status: status === "completed" ? true : false,
        };

        setTodos((currTodos) => [...currTodos, newTodo]);
    };

    return (
        <div>
            <h5>Create</h5>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        defaultValue="incomplete"
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="completed">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>
                <input type="submit" value="Save"></input>
            </form>
        </div>
    );
};

export default Create;
