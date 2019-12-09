import React, { Component } from 'react'
import './Header.css'
import logo from "../../assets/images/logo.svg";
import Flex from "../Flex/Flex";
import FlexItem from "../Flex/FlexItem";


class Header extends Component {
    state = {
        header1: "Welcome to my page !!",
        paragraph: "this page is still WIP"
    };

    render(){
        return (
            <Flex style={{height: "200px", background: "#aaa"}}>
                <FlexItem basis="150px">
                    <img src={logo} className="App-logo" alt="logo" />
                </FlexItem>
                <FlexItem grow="1" shrink="1" style={{textAlign: "left"}}>
                    <h1>{ this.state.header1 }</h1>
                    <p>{ this.state.paragraph }</p>
                </FlexItem>
            </Flex>
        )
    }
}

export default Header;
