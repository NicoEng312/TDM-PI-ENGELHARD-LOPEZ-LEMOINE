import React, { Component } from 'react';
import FormularioLogin from '../../components/formulariologin/formulariologin';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Iniciar Sesión</h2>
        <FormularioLogin history={this.props.history} />
      </div>
    );
  }
}

export default Login;