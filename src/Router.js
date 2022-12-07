//Import des bibliothèques React
import React from "react";
import { Routes, Route } from "react-router-dom";

//Import des 4 pages 
import Home from './pages/Home/home'
import Lodging from './pages/Lodging/lodging'
import About from './pages/About/about'
import Error from './pages/Error/error'

//Création de la fonction Routing pour la gestion des routes de l'application
function Routing () {
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lodging/:id" element={<Lodging />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error />} />
            </Routes>
    );
}

export default Routing