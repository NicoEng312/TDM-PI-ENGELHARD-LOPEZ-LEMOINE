import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './formularioregister.css';

const cookies = new Cookies();

class FormularioRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  evitarSubmit(event) {
    event.preventDefault();

    let usuarioACrear = {
      email: this.state.email,
      password: this.state.password,
      
    };

    let usersStorage = localStorage.getItem('users');
    let usersParseado = usersStorage !== null ? JSON.parse(usersStorage) : [];
    let usersFiltrado = usersParseado.filter(user => user.email === this.state.email);

    if (this.state.password.length < 6) {
      this.setState({ error: 'La contraseña debe tener al menos 6 caracteres' });
    } else if (usersFiltrado.length > 0) {
      this.setState({ error: 'Ya existe un usuario con el email ingresado' });
    } else {
      usersParseado.push(usuarioACrear);
      localStorage.setItem('users', JSON.stringify(usersParseado));
      cookies.set('auth-user', usuarioACrear.email);
      this.setState({ error: '' });
      this.props.history.push('/');
    }
  }

  controlarEmail(event) {
    this.setState({ email: event.target.value });
  }

  controlarPassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <form className="form-register" onSubmit={(event) => this.evitarSubmit(event)}>
        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => this.controlarEmail(event)}
          value={this.state.email}
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={(event) => this.controlarPassword(event)}
          value={this.state.password}
        />

        {this.state.error !== '' && <p className="error">{this.state.error}</p>}

        <button type="submit">Crear Cuenta</button>
      </form>
    );
  }
}

export default withRouter(FormularioRegister);