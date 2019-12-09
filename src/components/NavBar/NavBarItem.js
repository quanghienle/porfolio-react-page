import React, { Component } from 'react'
import './NavBarItem.css'

class NavBarItem extends Component {
    render(){
        return (
            <li className="NavBarItem">
                <a href={ this.props.link }>
                    { this.props.name }
                </a>
            </li>
        )
    }
}

export default NavBarItem;
