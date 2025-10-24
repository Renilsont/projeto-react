import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar({ totalItens }) {
    return (
        <>
            <header>
                <h1>Minha Loja</h1>
            </header>
            <nav className="nav-bar">
                <Link to="/">Produtos</Link>
                <Link to="/carrinho">Carrinho ({totalItens})</Link>
            </nav>
        </>

    );
}

export default NavBar;
