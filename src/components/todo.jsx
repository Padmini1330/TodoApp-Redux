import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../reducers/todoReducer"
import './todo.css'

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {

    console.log("props", props);

    const [todo, setTodo] = useState("");

    const add = () => {
        if (todo === "") {
            alert("Input is Empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    };


    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    return (
        <div className="addTodos">
            <div className="inputHandler">
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="todo-input"
                value={todo}
            />

            <button className="add-btn" onClick={() => add()}>
                Add
            </button>
            </div>
            <br />

            <ul>
                {props.todos.length > 0 &&
                    props.todos.map((item) => {
                        return <li key={item.id}>{item.item}</li>;
                    })}
            </ul>

        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);