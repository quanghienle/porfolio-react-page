import React from 'react';
import './App.css';
import Header from '../Header/Header';
import NavBar from "../NavBar/NavBar";
import NavBarItem from "../NavBar/NavBarItem";
import Flex from "../Flex/Flex";
import FlexItem from "../Flex/FlexItem";

function App() {
    return (
        <div className="App">
            <Header />
            <NavBar>
                <NavBarItem name="Home" link="/something"/>
                <NavBarItem name="Page 1" link="/something"/>
                <NavBarItem name="Page 2" link="/something"/>
                <NavBarItem name="Page 3" link="/something"/>
            </NavBar>

        </div>
    );
}

export default App;
