import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Buscador.css';

class Buscador extends Component {

    constructor(props){
        super(props)
        this.state = {
            search: '',
            tipo: 'movie'
        }
    }

    onSubmit(event){
        event.preventDefault()
        this.props.history.push('/resultados/' + this.state.tipo + '/' + this.state.search)
    }

    guardarBusqueda(event){
        this.setState({ search: event.target.value })
    }

    guardarTipo(event){
        this.setState({ tipo: event.target.value })
    }

    render(){
        return(
            <div className="buscador">
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input
                        type="text"
                        placeholder={this.state.tipo === 'movie' ? 'Buscar películas...' : 'Buscar series...'}
                        onChange={(event) => this.guardarBusqueda(event)}
                        value={this.state.search}
                    />
                    <div className="buscador-tipos">
                        <label>
                            <input
                                type="radio"
                                name="tipo"
                                value="movie"
                                checked={this.state.tipo === 'movie'}
                                onChange={(event) => this.guardarTipo(event)}
                            />
                            Películas
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="tipo"
                                value="tv"
                                checked={this.state.tipo === 'tv'}
                                onChange={(event) => this.guardarTipo(event)}
                            />
                            Series
                        </label>
                    </div>
                    <button type="submit">Buscar</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Buscador);