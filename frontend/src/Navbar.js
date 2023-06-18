import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Navbar() {
    let navigate = useNavigate();


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">
                        Home
                    </Link>
                    <div>
                        <Link className="btn btn-outline-light mx-2" id="hiddenButton" to="/addTodo"
                        > Add ToDo </Link>

                    </div>

                </div>
            </nav>
        </div>
    );
}
