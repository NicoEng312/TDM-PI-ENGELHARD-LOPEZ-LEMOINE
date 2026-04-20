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
    let peliculasFavoritas = this.state.favoritos.filter(fav => fav.tipo === 'movie');
    let seriesFavoritas = this.state.favoritos.filter(fav => fav.tipo === 'tv');

    return (
      <div className="home">
        <h2>Mis Favoritos</h2>

        {this.state.favoritos.length === 0 ? (
          <p>No tenés favoritos todavía.</p>
        ) : (
          <>
            <h2>Películas</h2>
            <section className="row cards">
              {peliculasFavoritas.length === 0 ? (
                <p>No tenés películas favoritas todavía.</p>
              ) : (
                peliculasFavoritas.map(pelicula => (
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

            <h2>Series</h2>
            <section className="row cards">
              {seriesFavoritas.length === 0 ? (
                <p>No tenés series favoritas todavía.</p>
              ) : (
                seriesFavoritas.map(serie => (
                  <Card
                    key={serie.id}
                    id={serie.id}
                    tipo={serie.tipo}
                    image={serie.image}
                    titulo={serie.titulo}
                    descripcion={serie.descripcion}
                  />
                ))
              )}
            </section>
          </>
        )}
      </div>
    );
  }
}

export default Favoritos;