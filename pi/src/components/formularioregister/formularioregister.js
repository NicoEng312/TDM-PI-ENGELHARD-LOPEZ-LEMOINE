import React, { Component } from 'react';
import './formularioregister.css';

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

    let usuarios = localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')) : [];
    let emailEnUso = usuarios.some(user => user.email === this.state.email);

    if (emailEnUso) {
      this.setState({ error: 'El email ya está en uso' });
    } else if (this.state.password.length < 6) {
      this.setState({ error: 'La contraseña debe tener al menos 6 caracteres' });
    } else {
      usuarios.push({ email: this.state.email, password: this.state.password });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
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

export default FormularioRegister;
