import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const meuEstilo = {
        backgroundColor: "DodgerBlue",
        color: "white"
    }
    return (
        <div className="uk-container" style={meuEstilo}>
            <nav className="uk-navbar">
                <div className="uk-navbar-left">
                    <Link to="/" style={meuEstilo} className="uk-navbar-item uk-logo">Pagina de Tarefas</Link>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to="/create">
                                <span className="uk-icon-button" uk-icon="icon: plus; ratio: 1.2"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;