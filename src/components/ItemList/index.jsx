import React, {Component} from 'react';
import './ItemList.scss';

class ItemList extends Component {
    
    render () {
        return (
            <ul className="list-group">
                <li className="list-group-item">Luke Skywalker</li>
                <li className="list-group-item">Darth Vader</li>
                <li className="list-group-item">R2-D2</li>
            </ul>
        );
    } 
}

export default ItemList;
