import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './formularioregister.css';

class FormularioRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      error: ''
    };
  }

  evitarSubmit(event) {
    event.preventDefault();

    let usuarioACrear = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      createdAt: Date.now()
    };

    let usersStorage = localStorage.getItem('users');
    let usersParseado = usersStorage !== null ? JSON.parse(usersStorage) : [];
    let usersFiltrado = usersParseado.filter(user => user.email === this.state.email);

    if (this.state.username.length < 3 && this.state.username.length > 7) {
      this.setState({ error: 'La extensión del username debe ser de 3 a 7 caracteres' });
    } else if (!this.state.email.includes('@')) {
      this.setState({ error: 'email mal formateado' });
    } else if (this.state.password.length < 5 && this.state.password.length > 12) {
      this.setState({ error: 'La extensión del password debe ser de 5 a 12 caracteres' });
    } else if (usersFiltrado.length > 0) {
      this.setState({ error: 'Ya existe un usuario con el email ingresado' });
    } else {
      usersParseado.push(usuarioACrear);
      localStorage.setItem('users', JSON.stringify(usersParseado));
      this.setState({ error: '' });
      this.props.history.push('/login');
    }
  }

  controlarUsername(event) {
    this.setState({ username: event.target.value });
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
        <label>Username:</label>
        <input
          type="text"
          onChange={(event) => this.controlarUsername(event)}
          value={this.state.username}
        />

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