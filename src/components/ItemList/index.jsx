import React, {Component} from 'react';
import './ItemList.scss';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

class ItemList extends Component {

    swapi = new SwapiService();
    state = {
        peopleData: null
    }

    renderItems = (array) => {
        return array.map(({id, name}) => {
            return (
            <li key={id}
            onClick={()=>this.props.onItemSelected(id)}
            className="list-group-item">{name}</li>
            )
        })
    }

    onPeopleDataReady = (peopleData) => {
        this.setState({ peopleData })
    }

    getPeopleData(){
        this.swapi.getAllPeople()
        .then(this.onPeopleDataReady);
    }

    componentDidMount() {
        this.getPeopleData()
    }
    
    render () {
        const { peopleData } = this.state;
        if (!peopleData) return <Spinner/>
        const listItems = this.renderItems(peopleData);
        return (
            <ul className="list-group">
            {listItems}
            </ul>
        );
    } 
}

export default ItemList;
