import React, { Component } from 'react';
import Buscador from '../../components/Buscador/Buscador';
import SeccionPeliculas from '../../components/seccionpeliculas/Seccionpeliculas';
import SeccionSeries from '../../components/seccionseries/Seccionseries';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Buscador />
        <SeccionPeliculas titulo="Películas populares" endpoint="popular" />
        <SeccionPeliculas titulo="Películas en cartel" endpoint="now_playing" />
        <SeccionSeries titulo="Series populares" endpoint="popular" />
      </div>
    );
  }
}


export default Home;


