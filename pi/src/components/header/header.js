import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './header.css';

const cookies = new Cookies();

class Header extends Component {
  
  cerrarSesion() {
    cookies.remove('auth-user');
    this.props.history.push('/');
  }

  render() {
    const haySession = cookies.get('auth-user') ? true : false;

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

export default withRouter(Header);