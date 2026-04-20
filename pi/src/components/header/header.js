import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './header.css';

const cookies = new Cookies();

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haySession: cookies.get('auth-user') !== undefined
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({ haySession: cookies.get('auth-user') !== undefined });
    }
  }

  cerrarSesion() {
    cookies.remove('auth-user');
    this.setState({ haySession: false });
    this.props.history.push('/');
  }

  render() {
    return (
      <header>
        <Link to="/"><h1>MovieApp</h1></Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {!this.state.haySession && <li><Link to="/login">Login</Link></li>}
            {!this.state.haySession && <li><Link to="/register">Crear Cuenta</Link></li>}
            {this.state.haySession && <li><Link to="/favoritos">Favoritos</Link></li>}
            <li><Link to="/movies">Películas</Link></li>
            <li><Link to="/series">Series</Link></li>
            {this.state.haySession &&
              <li><button onClick={() => this.cerrarSesion()}>Cerrar Sesión</button></li>
            }
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);