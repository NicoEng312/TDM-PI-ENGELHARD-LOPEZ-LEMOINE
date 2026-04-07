import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDescripcion: false
    };
  }

  mostrarOcultarDescripcion() {
    this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion });
  }

  render() {
    return (
      <article className="single-card-movie">
        <img src={this.props.image} className="card-img-top" alt={this.props.titulo} />
        <div className="cardBody">
          <h5 className="card-title">{this.props.titulo}</h5>

          <button
            className="btn-descripcion"
            onClick={() => this.mostrarOcultarDescripcion()}
          >
            {this.state.mostrarDescripcion ? 'Ocultar descripción' : 'Ver descripción'}
          </button>

          {this.state.mostrarDescripcion && (
            <p className="card-text">{this.props.descripcion}</p>
          )}

          <a href={this.props.link} className="btn">Ver más</a>
        </div>
      </article>
    );
  }
}

export default Card; 