import React from "react";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
                <div className="container">
                    <a className="navbar-brand site-logo" href="index.html">
                        {/* <h3>Hotel de Viña</h3> */}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {/* <li className="nav-item">
                                <a className="nav-link active" href="index.html">
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="rooms.html">
                                    Habitaciones
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">
                                    Acerca de
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="events.html">
                                    Eventos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">
                                    Contacto
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-primary text-white" href="reservation.html">
                                    Reservas
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
