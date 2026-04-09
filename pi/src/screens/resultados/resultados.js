import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../../components/card/card';

const API_KEY = 'b1594e6717d406207ae03e5606e59437';

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  componentDidMount() {
    let tipo = this.props.match.params.tipo;
    let query = this.props.match.params.query;

    fetch('https://api.themoviedb.org/3/search/' + tipo + '?api_key=' + API_KEY + '&language=es-ES&query=' + query)
      .then(response => response.json())
      .then(data => this.setState({ resultados: data.results }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h2>Resultados de búsqueda</h2>
        <section className="row cards">
          {this.state.resultados.length === 0 ? (
            <p>No se encontraron resultados</p>
          ) : (
            this.state.resultados.map(item => (
              <Card
                key={item.id}
                id={item.id}
                tipo={this.props.match.params.tipo}
                image={'https://image.tmdb.org/t/p/w342' + item.poster_path}
                titulo={item.title || item.name}
                descripcion={item.overview}
              />
            ))
          )}
        </section>
      </div>
    );
  }
}

export default withRouter(Resultados);