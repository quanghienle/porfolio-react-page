import React, { Component } from 'react'
import './Main.css'

class Main extends Component {
    render(){
        return (
                <div className="main">
                    <h2>SOME HEADING</h2>
                    <h5>SOME description</h5>
                    <div className="fakeimg" style={{height: '200px'}}>Image</div>
                    <p>Some text..</p>
                    <br />
                    <h2>TITLE HEADING</h2>
                    <h5>Title description</h5>
                    <div className="fakeimg" style={{height: '200px'}}>Image</div>
                    <p>Some text..</p>
                    <div className="fakeimg" style={{height: '200px'}}>Image</div>
                    <h2>TITLE HEADING</h2>
                    <h5>Title description</h5>
                    <div className="fakeimg" style={{height: '200px'}}>Image</div>
                </div>
        )
    }
}

export default Main;
