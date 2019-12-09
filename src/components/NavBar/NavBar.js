import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
    render(){
        return (
            <div className="NavBar">
                <ul> { this.props.children } </ul>
            </div>
        )
    }
}

export default NavBar;
