import React, { Component } from 'react';

const API_KEY = 'b1594e6717d406207ae03e5606e59437';

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: {},
      cargando: true
    };
  }

  componentDidMount() {
    let tipo = this.props.match.params.tipo;
    let id = this.props.match.params.id;

    fetch('https://api.themoviedb.org/3/' + tipo + '/' + id + '?api_key=' + API_KEY)
      .then(response => response.json())
      .then(data => this.setState({ datos: data, cargando: false }))
      .catch(error => console.log(error));
  }

  agregarFavorito() {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let yaExiste = favoritos.some(fav => fav.id === this.state.datos.id);

    if (yaExiste) {
      favoritos = favoritos.filter(fav => fav.id !== this.state.datos.id);
    } else {
      favoritos.push(this.state.datos);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  render() {
    let haySession = document.cookie.includes('session');
    let datos = this.state.datos;

    return (
      <div className="detalle">
        {this.state.cargando ? (
          <p>Cargando...</p>
        ) : (
          <div>
            <img src={'https://image.tmdb.org/t/p/w342' + datos.poster_path} alt={datos.title || datos.name} />
            <h2>{datos.title || datos.name}</h2>
            <p>Calificación: {datos.vote_average}</p>
            <p>Fecha de estreno: {datos.release_date || datos.first_air_date}</p>
            {datos.runtime && <p>Duración: {datos.runtime} minutos</p>}
            <p>Sinopsis: {datos.overview}</p>
            <p>Géneros: {datos.genres && datos.genres.map((genero, idx) => (
              <span key={genero.id + idx}>{genero.name} </span>
            ))}</p>

            {haySession &&
              <button onClick={() => this.agregarFavorito()}>
                Agregar / Quitar de favoritos
              </button>
            }
          </div>
        )}
      </div>
    );
  }
}

export default Detalle;
