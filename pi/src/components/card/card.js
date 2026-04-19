import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './card.css';

const cookies = new Cookies();

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDescripcion: false,
      esFavorito: false
    };
  }

  componentDidMount() {
    let email = cookies.get('auth-user');
    if (email !== undefined) {
      let favoritos = localStorage.getItem('favoritos-' + email) ? JSON.parse(localStorage.getItem('favoritos-' + email)) : [];
      this.setState({ esFavorito: favoritos.some(fav => fav.id === this.props.id) });
    }
  }

  mostrarOcultarDescripcion() {
    this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion });
  }

  irADetalle() {
    this.props.history.push('/detalle/' + this.props.tipo + '/' + this.props.id);
  }

  agregarFavorito() {
    let email = cookies.get('auth-user');
    let favoritos = localStorage.getItem('favoritos-' + email) ? JSON.parse(localStorage.getItem('favoritos-' + email)) : [];
    let yaEsta = favoritos.some(fav => fav.id === this.props.id);
    yaEsta ? favoritos = favoritos.filter(fav => fav.id !== this.props.id) : favoritos.push({ id: this.props.id, tipo: this.props.tipo, image: this.props.image, titulo: this.props.titulo, descripcion: this.props.descripcion });
    localStorage.setItem('favoritos-' + email, JSON.stringify(favoritos));
    this.setState({ esFavorito: !yaEsta });
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

          {cookies.get('auth-user') !== undefined &&
            <button className="btn-favorito" onClick={() => this.agregarFavorito()}>
              {this.state.esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            </button>
          }

          <button className="btn" onClick={() => this.irADetalle()}>
            Ver más
          </button>

        </div>
      </article>
    );
  }
}

export default withRouter(Card);