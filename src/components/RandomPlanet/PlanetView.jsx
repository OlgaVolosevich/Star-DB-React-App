import React from 'react';

const PlanetView = ({ planet }) => {
    const {name, id, population, rotationPeriod, diameter} = planet;
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
  }

  export default PlanetView;