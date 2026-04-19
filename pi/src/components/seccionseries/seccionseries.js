import React, { Component } from 'react';
import Card from '../card/card';
import Loader from '../loader/loader';

const API_KEY = 'b1594e6717d406207ae03e5606e59437';

class SeccionSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/tv/' + this.props.endpoint + '?api_key=' + API_KEY + '&language=es-ES')
      .then(response => response.json())
      .then(data => this.setState({ series: data.results }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <h2>{this.props.titulo}</h2>
        <section className="row cards">
          {this.state.series.length === 0 ? (
            <Loader />
          ) : (
            this.state.series.map(serie => (
              <Card
                key={serie.id}
                id={serie.id}
                tipo="tv"
                image={'https://image.tmdb.org/t/p/w342' + serie.poster_path}
                titulo={serie.name}
                descripcion={serie.overview}
              />
            ))
          )}
        </section>
      </>
    );
  }
}

export default SeccionSeries;