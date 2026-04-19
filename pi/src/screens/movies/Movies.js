import React, { Component } from 'react';
import Card from '../../components/card/card';
import Loader from '../../components/loader/loader';

const API_KEY = 'b1594e6717d406207ae03e5606e59437';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      page: 1,
      filtro: ''
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + '&language=es-ES&page=' + this.state.page)
      .then(response => response.json())
      .then(data => this.setState({ peliculas: data.results }))
      .catch(error => console.log(error));
  }

  guardarFiltro(event) {
    this.setState({ filtro: event.target.value });
  }

  cargarMas() {
    let nuevaPagina = this.state.page + 1;
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + '&language=es-ES&page=' + nuevaPagina)
      .then(response => response.json())
      .then(data => this.setState({
        peliculas: this.state.peliculas.concat(data.results),
        page: nuevaPagina
      }))
      .catch(error => console.log(error));
  }

  render() {
    let peliculasFiltradas = this.state.peliculas.filter(pelicula =>
    pelicula.title.toLowerCase().includes(this.state.filtro.toLowerCase()) 
    );

    return (
      <div className="movies">
        <h1>Películas</h1>

        <form>
          <input
            placeholder="Filtrar películas..."
            onChange={(event) => this.guardarFiltro(event)}
            value={this.state.filtro}
          />
        </form>

        <section className="row cards">
          {this.state.peliculas.length === 0 ? (
            <Loader />
          ) : (
            peliculasFiltradas.map(pelicula => (
              <Card
                key={pelicula.id}
                id={pelicula.id}
                tipo="movie"
                image={'https://image.tmdb.org/t/p/w342' + pelicula.poster_path}
                titulo={pelicula.title}
                descripcion={pelicula.overview}
              />
            ))
          )}
        </section>

        <button onClick={() => this.cargarMas()}>Cargar más</button>
      </div>
    );
  }
}

export default Movies;
