import React, { Component } from 'react'
import './FlexItem.css'

class FlexItem extends Component {
    render(){
        const { grow, shrink, basis, style = {}, children } = this.props;
        console.log(this.props);
        style.flexGrow = grow;
        style.flexShrink = shrink;
        style.flexBasis = basis;

        return (
            <div className="FlexItem"
                 style={style}>
                {children}
            </div>
        )
    }
}

export default FlexItem;
