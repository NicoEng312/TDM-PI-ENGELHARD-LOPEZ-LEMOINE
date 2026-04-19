import React, { Component } from 'react';
import Card from '../card/card';
import Loader from '../loader/loader';

const API_KEY = 'b1594e6717d406207ae03e5606e59437';

class SeccionPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/' + this.props.endpoint + '?api_key=' + API_KEY + '&language=es-ES')
      .then(response => response.json())
      .then(data => this.setState({ peliculas: data.results }))
      .catch(error => console.log(error));
  }

  render() {        
    return (
      <>
        <h2>{this.props.titulo}</h2>
        <section className="row cards">
          {this.state.peliculas.length === 0 ? (
            <Loader />
          ) : (
            this.state.peliculas.map(pelicula => (
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
      </>
    );
  }
}

export default SeccionPeliculas;