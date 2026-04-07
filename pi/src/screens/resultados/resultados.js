import React, { Component } from 'react';

const API_KEY = 'b1594e6717d406207ae03e5606e59437';

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: null
    };
  }

  componentDidMount() {
    let tipo = this.props.match.params.tipo;
    let id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=${API_KEY}&language=es-ES`)
      .then(response => response.json())
      .then(data => this.setState({ detalle: data }))
      .catch(error => console.log(error));
  }

  render() {
    let detalle = this.state.detalle;

    return (
      <div className="detalle">
        {detalle === null ? (
          <p>Cargando...</p>
        ) : (
          <div className="detalle-contenido">
            <img
              src={`https://image.tmdb.org/t/p/w342${detalle.poster_path}`}
              alt={detalle.title || detalle.name}
            />
            <div className="detalle-info">
              <h1>{detalle.title || detalle.name}</h1>
              <p><strong>Calificación:</strong> {detalle.vote_average}</p>
              <p><strong>Fecha de estreno:</strong> {detalle.release_date || detalle.first_air_date}</p>
              <p><strong>Sinopsis:</strong> {detalle.overview}</p>
              <p><strong>Géneros:</strong>
                {detalle.genres.map((genero, idx) => (
                  <span key={genero.id + idx}> {genero.name} </span>
                ))}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Detalle;