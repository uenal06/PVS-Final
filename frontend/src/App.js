import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ViewTodo from "./ViewTodo";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>

                <Routes>

                    <Route exact path="/" element={<ViewTodo/>}/>
                    <Route exact path="/addTodo" element={<AddTodo/>}/>
                    <Route exact path="/edittodo/:id" element={<EditTodo/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
