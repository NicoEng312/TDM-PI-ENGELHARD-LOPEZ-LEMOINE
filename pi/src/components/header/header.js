import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  cerrarSesion() {
    document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    window.location.href = '/';
  }

  render() {
    let haySession = document.cookie.includes('session');

    return (
      <header>
        <Link to="/"><h1>MovieApp</h1></Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {!haySession && <li><Link to="/login">Login</Link></li>}
            {!haySession && <li><Link to="/register">Crear Cuenta</Link></li>}
            {haySession && <li><Link to="/favoritos">Favoritos</Link></li>}
            <li><Link to="/vertodas/peliculas-populares">Películas</Link></li>
            <li><Link to="/vertodas/series-populares">Series</Link></li>
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
