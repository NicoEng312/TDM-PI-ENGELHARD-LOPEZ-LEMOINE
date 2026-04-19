import React, { Component } from 'react';
import Card from '../../components/card/card';

const API_KEY = 'b1594e6717d406207ae03e5606e59437';

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      page: 1,
      filtro: '',
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=' + API_KEY + '&language=es-ES&page=' + this.state.page)
      .then(response => response.json())
      .then(data => this.setState({ series: data.results }))
      .catch(error => console.log(error));
  }

  guardarFiltro(event) {
    this.setState({ filtro: event.target.value });
  }

  cargarMas() {
    let nuevaPagina = this.state.page + 1;
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=' + API_KEY + '&language=es-ES&page=' + nuevaPagina)
      .then(response => response.json())
      .then(data => this.setState({
        series: this.state.series.concat(data.results),
        page: nuevaPagina
      }))
      .catch(error => console.log(error));
  }

  render() {
    let seriesFiltradas = this.state.series.filter(serie =>
    serie.name.toLowerCase().includes(this.state.filtro.toLowerCase())
    );

    return (
      <div className="series">
        <h1>Series</h1>

        <form>
          <input
            placeholder="Filtrar series..."
            onChange={(event) => this.guardarFiltro(event)}
            value={this.state.filtro}
          />
        </form>

        <section className="row cards">
          {this.state.series.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            seriesFiltradas.map(serie => (
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

        <button onClick={() => this.cargarMas()}>Cargar más</button>
      </div>
    );
  }
}

export default Series;
