import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Create from "./components/Create";
import List from "./components/List";
import Nav from "./components/Nav";
import { useState } from "react";
import { TodoContext } from "./components/TodoContext";

const sampleTodos = {
    id: 1,
    title: "My Todo 1",
    status: false,
};

function App() {
    const [todos, setTodos] = useState([]);

    console.log("Todos", todos);

    return (
        <TodoContext.Provider value={{ todos: todos, setTodos: setTodos }}>
            <div className="App">
                <Header />
                <div className="wrapper">
                    <div className="inner-wrap">
                        <Create />
                        <List />
                    </div>
                    <Nav />
                </div>
            </div>
        </TodoContext.Provider>
    );
}

export default App;
