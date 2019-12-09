import React, { Component } from 'react'
import './FlexItem.css'

class FlexItem extends Component {
    render(){
        const { grow, shrink, basis, align, style = {}, children } = this.props;
        style.flexGrow = grow;
        style.flexShrink = shrink;
        style.flexBasis = basis;
        style.alignSelf = align;

        return (
            <div className="FlexItem"
                 style={style}>
                {children}
            </div>
        )
    }
}

export default FlexItem;
