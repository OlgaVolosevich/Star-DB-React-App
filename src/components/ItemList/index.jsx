import React, {Component} from 'react';
import './ItemList.scss';

class ItemList extends Component {
    
    render () {
        return (
            <ul class="list-group">
                <li class="list-group-item">Luke Skywalker</li>
                <li class="list-group-item">Darth Vader</li>
                <li class="list-group-item">R2-D2</li>
            </ul>
        );
    } 
}

export default ItemList;
