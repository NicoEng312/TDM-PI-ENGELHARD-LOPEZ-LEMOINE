import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './screens/home/home';
import Login from './screens/login/login';
import Register from './screens/register/register';
import Detalle from './screens/detalle/detalle';
import Favoritos from './screens/favoritos/favoritos';
import Resultados from './screens/resultados/resultados';
import Movies from './screens/movies/Movies';
import Series from './screens/series/Series';
import NotFound from './screens/notfound/notfound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/detalle/:tipo/:id" component={Detalle} />
          <Route path="/favoritos" component={Favoritos} />
          <Route path="/resultados/:tipo/:query" component={Resultados} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;