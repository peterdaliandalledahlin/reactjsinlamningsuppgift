import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
//import {logout} from '../../store/actions/authActions'


class Navigation extends Component {


    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        PETER DAHLIN DESIGN
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNav" className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="active" className="nav-link">Hem</NavLink>
                            </li>
                        </ul>
                    </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/login" activeClassName="active" className="nav-link">Logga in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/register" activeClassName="active" className="nav-link">Registrera användare</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/registercustomer" activeClassName="active" className="nav-link">Registrera kund</NavLink>
                            </li>
                        </ul>
                </div>
            </nav>
        )
    }

}

export default Navigation