import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
import "./headerModule.scss";

function Header () {
    return (
    <header className="header">
        <img src={Logo} alt="Logo Kasa" />
        <nav className="nav">
            <NavLink to="/" className="headerLink, accueil">Accueil</NavLink>
            <NavLink to="/about" className="headerLink, about">À propos</NavLink>
        </nav>
    </header>
    )
}

export default Header