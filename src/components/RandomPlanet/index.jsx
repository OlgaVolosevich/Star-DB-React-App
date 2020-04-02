import React, { Component } from 'react';
import './RandomPlanet.scss';
import SwapiService from './../../services/SwapiService';
import Spinner from '../Spinner';
import PlanetView from './PlanetView';
import FetchError from './FetchError';

class RandomPlanet extends Component {

  swapi = new SwapiService();

  state = { 
    planet : {},
    loading: true,
    error: false
  }

  onPlanetDataReady = (planet) => {
    this.setState({ planet, loading: false });
  }

  onFetchError = () => {
    this.setState({
      error: true
    })
  }
  getPlanetData(){
    const randomPlanetId = Math.floor((Math.random() * 15)+2);
    this.swapi.getPlanet(randomPlanetId)
    .then(this.onPlanetDataReady)
    .catch(this.onFetchError)
  }

  componentDidMount () {
    setInterval(() => this.getPlanetData(), 5000);
  }

    render() {
      const { planet, loading, error } = this.state;
      const planetData = loading ? <Spinner/> : <PlanetView planet={planet}/>
      return (
       <div className="random-planet jumbotron">
         {error ? <FetchError/> : planetData} 
       </div>
      );
    }
  }

export default RandomPlanet;

