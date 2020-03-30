import React, { Component } from 'react';
import './RandomPlanet.scss';
import SwapiService from './../../services/SwapiService';

class RandomPlanet extends Component {

  swapi = new SwapiService();

  state = { 
    planet : {}
  }

  onPlanetDataReady = (planet) => {
    this.setState({ planet });
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
      const { planet : { id, name, population, rotationPeriod, diameter } } = this.state;
      return (
        <div className="random-planet jumbotron">
          <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
          <div className="planet-info-container">
            <h4>{name}</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="term">Population</span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </div>
  
      );
    }
  }

export default RandomPlanet;