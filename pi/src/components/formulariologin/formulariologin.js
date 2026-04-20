import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './formulariologin.css';

const cookies = new Cookies();

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

    let usersStorage = localStorage.getItem('users');

    if (usersStorage === null) {
      this.setState({ error: 'Credenciales incorrectas' });
    } else {
      let usersParseado = JSON.parse(usersStorage);
      let usersFiltrado = usersParseado.filter(user => user.email === this.state.email);

      if (usersFiltrado.length === 0) {
        this.setState({ error: 'Credenciales incorrectas' });
      } else if (usersFiltrado[0].password !== this.state.password) {
        this.setState({ error: 'Credenciales incorrectas' });
      } else {
        cookies.set('auth-user', usersFiltrado[0].email);
        this.setState({ error: '' });
        this.props.history.push('/');
      }
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

export default withRouter(FormularioLogin);