import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Card from '../../components/card/card';

const cookies = new Cookies();

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritos: []
    };
  }

  componentDidMount() {
    let email = cookies.get('auth-user');
    let favoritos = localStorage.getItem('favoritos-' + email) ? JSON.parse(localStorage.getItem('favoritos-' + email)) : [];
    this.setState({ favoritos: favoritos });
  }
  render() {
    return (
      <div className="home">
        <h2>Mis Favoritos</h2>
        <section className="row cards">
          {this.state.favoritos.length === 0 ? (
            <p>No tenés favoritos todavía.</p>
          ) : (
            this.state.favoritos.map(pelicula => (
              <Card
                key={pelicula.id}
                id={pelicula.id}
                tipo={pelicula.tipo}
                image={pelicula.image}
                titulo={pelicula.titulo}
                descripcion={pelicula.descripcion}
              />
            ))
          )}
        </section>
      </div>
    );
  }
}

export default Favoritos;