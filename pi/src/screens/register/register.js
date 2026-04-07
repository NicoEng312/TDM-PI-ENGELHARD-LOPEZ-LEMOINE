import React, { Component } from 'react';
import FormularioRegister from '../../components/formularioregister/formularioregister';
import './register.css';

class Register extends Component {
  render() {
    return (
      <div className="register">
        <h2>Crear Cuenta</h2>
        <FormularioRegister />
      </div>
    );
  }
}

export default Register;
