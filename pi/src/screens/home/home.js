import React, { Component } from 'react';
import Buscador from '../../components/Buscador/Buscador';
import SeccionPeliculas from '../../components/seccionpeliculas/seccionpeliculas';
import SeccionSeries from '../../components/seccionseries/seccionseries';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Buscador />
        <SeccionPeliculas titulo="Películas populares" endpoint="popular" />
        <SeccionSeries titulo="Series populares" endpoint="popular" />
      </div>
    );
  }
} 

export default Home;