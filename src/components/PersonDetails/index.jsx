import React, { Component } from 'react';
import './PersonDetails.scss';
import SwapiService from '../../services/SwapiService'

class PersonDetails extends Component {

    swapi = new SwapiService();
    state = {
      person: null
    }

    updatePerson = (id) => {
      if(id) {
        this.swapi.getPerson(id)
        .then(person => this.setState({ person }))
      } else {
        return;
      }
    }

    componentDidMount(){
      this.updatePerson(this.props.personId);
    }

    componentDidUpdate(prevProps){
      if (prevProps.personId !== this.props.personId) {
        this.updatePerson(this.props.personId);
      }
    }
  render() {
    if (!this.state.person) return <div className="person-details card">Select any character</div>
    const {id, name, gender, birthYear, eyeColor} = this.state.person;
      return (
        <div className="person-details card">
          <img className="person-image" alt={name} src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{gender}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth Year</span>
                <span>{birthYear}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Eye Color</span>
                <span>{eyeColor}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }
export default PersonDetails;