import React, { Component } from 'react';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ItemList from './../ItemList';
import PersonDetails from './../PersonDetails';

class App extends Component {

    state = {
        selectedPerson : null
    }

    onSelectedPerson = (id) => {
        this.setState({
            selectedPerson : id
        })
    }
    
    render() {
        return (
        <div className="container">
            <Header/>
            <RandomPlanet/>
            <div className="row">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onSelectedPerson}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
