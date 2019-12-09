import React from 'react';
import './App.css';
import Header from '../Header/Header';
import NavBar from "../NavBar/NavBar";
import NavBarItem from "../NavBar/NavBarItem";
import HomeSection from "../Section/HomeSection"
import Flex from "../Flex/Flex";
import FlexItem from "../Flex/FlexItem";

function App() {
    return (
        <div className="App">
            <Header />
            <NavBar>
                <NavBarItem name="Home" link="#home"/>
                <NavBarItem name="About" link="#about"/>
                <NavBarItem name="Porfolio" link="#porfolio"/>
                <NavBarItem name="Contact" link="#contact"/>
            </NavBar>
            <HomeSection />

        </div>
    );
}

export default App;
