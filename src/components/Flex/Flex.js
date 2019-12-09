import React, { Component } from 'react'
import './Flex.css'

class Flex extends Component {
    render(){
        const { direction, wrap, justifyContent, style, children } = this.props;
        style.flexDirection = direction;
        style.flexWrap = wrap;
        style.justifyContent = justifyContent;

        return (
            <div className="Flex" style={style}>
                {children}
            </div>
        )
    }
}

export default Flex;
