import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class MiPerfil extends Component {
  logout() {
    cookies.remove('auth-user');
    sessionStorage.removeItem('usuarioEnSesion');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="miperfil">
        <h2>Mi Perfil</h2>
        <button onClick={() => this.logout()}>Cerrar Sesión</button>
      </div>
    );
  }
}

export default MiPerfil;