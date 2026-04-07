import React, { Component } from 'react';
import './formulariologin.css';

class FormularioLogin extends Component {
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

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let usuarioEncontrado = usuarios.find(user => user.email === this.state.email);

    if (!usuarioEncontrado || usuarioEncontrado.password !== this.state.password) {
      this.setState({ error: 'Credenciales incorrectas' });
    } else {
      this.setState({ error: '' });
      window.location.href = '/';
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
      <form className="form-login" onSubmit={(event) => this.evitarSubmit(event)}>
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

        <button type="submit">Iniciar Sesión</button>
      </form>
    );
  }
}

export default FormularioLogin;
