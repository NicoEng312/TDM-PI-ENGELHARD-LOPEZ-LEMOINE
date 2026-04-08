import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Buscador.css';

class Buscador extends Component {

    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
    }

    onSubmit(event){
        event.preventDefault()
        this.props.history.push('/busqueda/' + this.state.search)
    }

    guardarBusqueda(event){
        this.setState({ search: event.target.value })
    }

    render(){
        return(
            <div className="buscador">
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input
                        placeholder="Buscar películas o series..."
                        onChange={(event) => this.guardarBusqueda(event)}
                        value={this.state.search}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Buscador);
