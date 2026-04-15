import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  cerrarSesion() {
    localStorage.removeItem('session');
    window.location.href = '/';
  }

  render() {
    let haySession = localStorage.getItem('session') === 'true';

    return (
      <header>
        <Link to="/"><h1>MovieApp</h1></Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {!haySession && <li><Link to="/login">Login</Link></li>}
            {!haySession && <li><Link to="/register">Crear Cuenta</Link></li>}
            {haySession && <li><Link to="/favoritos">Favoritos</Link></li>}
            <li><Link to="/movies">Películas</Link></li>
            <li><Link to="/series">Series</Link></li>
            {haySession &&
              <li><button onClick={() => this.cerrarSesion()}>Cerrar Sesión</button></li>
            }
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
