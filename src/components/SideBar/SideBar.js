import React, { Component } from 'react'
import './SideBar.css'

class SideBar extends Component {
    render(){
        return (
                <div className="side">
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                    <div className="fakeimg" style={{height: '200px'}}>Image</div>
                    <p>Some text about me ...</p>
                    <h3>More Text</h3>
                    <p>Omae wa mou shindeiru</p>
                    <div className="fakeimg" style={{height: '60px'}}>Image</div><br />
                    <div className="fakeimg" style={{height: '60px'}}>Image</div><br />
                    <div className="fakeimg" style={{height: '60px'}}>Image</div>
                </div>
        )
    }
}

export default SideBar;
