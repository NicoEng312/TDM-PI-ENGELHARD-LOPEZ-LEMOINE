import React, { Component } from 'react';
import Loader from '../../components/loader/loader';
import Cookies from 'universal-cookie';
import './detalle.css';

const API_KEY = 'b1594e6717d406207ae03e5606e59437';
const cookies = new Cookies();

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: null,
      esFavorito: false
    };
  }

  componentDidMount() {
    let tipo = this.props.match.params.tipo;
    let id = this.props.match.params.id;

    fetch('https://api.themoviedb.org/3/' + tipo + '/' + id + '?api_key=' + API_KEY + '&language=es-ES')
      .then(response => response.json())
      .then(data => {
        let email = cookies.get('auth-user');
        let favoritos = localStorage.getItem('favoritos-' + email) ? JSON.parse(localStorage.getItem('favoritos-' + email)) : [];
        let yaEsta = favoritos.filter(fav => fav.id === data.id).length > 0;
        this.setState({ detalle: data, esFavorito: yaEsta });
      })
      .catch(error => console.log(error));
  }

  agregarFavorito() {
    let email = cookies.get('auth-user');
    let favoritos = localStorage.getItem('favoritos-' + email) ? JSON.parse(localStorage.getItem('favoritos-' + email)) : [];
    let yaEsta = favoritos.filter(fav => fav.id === this.state.detalle.id).length > 0;

    yaEsta ?
      favoritos = favoritos.filter(fav => fav.id !== this.state.detalle.id)
    :
      favoritos.push({
        id: this.state.detalle.id,
        tipo: this.props.match.params.tipo,
        image: this.state.detalle.poster_path,
        titulo: this.state.detalle.title || this.state.detalle.name,
        descripcion: this.state.detalle.overview
      });

    localStorage.setItem('favoritos-' + email, JSON.stringify(favoritos));
    this.setState({ esFavorito: !yaEsta });
  }

  render() {
    let detalle = this.state.detalle;
    let haySession = cookies.get('auth-user') !== undefined;

    return (
      <div className="detalle">
        {detalle === null ? (
          <Loader />
        ) : (
          <div className="detalle-contenido">
            <img
              src={'https://image.tmdb.org/t/p/w342' + detalle.poster_path}
              alt={detalle.title || detalle.name}
            />
            <div className="detalle-info">
              <h1>{detalle.title || detalle.name}</h1>
              <p><strong>Calificación:</strong> {detalle.vote_average}</p>
              <p><strong>Fecha de estreno:</strong> {detalle.release_date || detalle.first_air_date}</p>
              {detalle.runtime && <p><strong>Duración:</strong> {detalle.runtime} minutos</p>}
              <p><strong>Sinopsis:</strong> {detalle.overview}</p>
              <p><strong>Géneros:</strong> {detalle.genres && detalle.genres.map((genero, idx) => (
                <span key={genero.id + idx}>{genero.name} </span>
              ))}</p>

              {haySession &&
                <button onClick={() => this.agregarFavorito()}>
                  {this.state.esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                </button>
              }

            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Detalle;