import React, { Component } from 'react';
import './RandomPlanet.scss';
import SwapiService from './../../services/SwapiService';
import Spinner from '../Spinner';
import PlanetView from './PlanetView';

class RandomPlanet extends Component {

  swapi = new SwapiService();

  state = { 
    planet : {},
    loading: true
  }

  onPlanetDataReady = (planet) => {
    this.setState({ planet, loading: false });
  }
  getPlanetData(){
    const randomPlanetId = Math.floor((Math.random() * 15)+2);
    this.swapi.getPlanet(randomPlanetId)
    .then(this.onPlanetDataReady);
  }

  componentDidMount () {
    setInterval(() => this.getPlanetData(), 5000);
  }

    render() {
      const { planet, loading } = this.state;
      return (
       <div className="random-planet jumbotron">
         {loading ? <Spinner/> : <PlanetView planet={planet}/>} 
       </div>
      );
    }
  }

export default RandomPlanet;

