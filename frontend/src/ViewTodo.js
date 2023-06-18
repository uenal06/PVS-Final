import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams, useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ViewTodo() {
    const [todos, setTodos] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/todos");
        const sortedTodos = result.data.sort((a, b) => a.task.localeCompare(b.task));
        setTodos(sortedTodos);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/todo/${id}`);
        loadUsers();
    };


    return (
        <div className="container">
            <ToastContainer/>
            <div className="py-4">
                <table className="table border table-hover shadow">
                    <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Task</th>
                        <th scope="col">Description</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{todo.task}</td>
                            <td>{todo.description}</td>
                            <td>{todo.priority}</td>
                            <td>
                                <Link className="btn btn-outline-primary mx-2" to={`/edittodo/${todo.id}`}>
                                    Edit
                                </Link>
                                <button className="btn btn-danger mx-2" onClick={() => deleteUser(todo.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>


            </div>
        </div>
    );


}