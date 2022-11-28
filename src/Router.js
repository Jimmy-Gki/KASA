//Import des bibliothèques React
import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import des 4 pages 
import Home from './pages/Home'
import Lodging from './pages/Lodging'
import About from './pages/About'
import Error from './pages/Error'

function Routing () {
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <header />
            <Route path="/" element={<Home />} />
            <Route path="/lodging/:id" element={<Lodging />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)}

export default Routing;
