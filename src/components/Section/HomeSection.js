import React, { Component } from 'react'
import Flex from "../Flex/Flex";
import FlexItem from "../Flex/FlexItem";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";

class HomeSection extends Component {
    render(){
        return (
            <div className="Home" id="home">
                <Flex>
                    <FlexItem basis="300px" align="top">
                        <SideBar />
                    </FlexItem>
                    <FlexItem grow="1" shrink="1">
                        <Main />
                    </FlexItem>
                </Flex>
            </div>
        )
    }
}

export default HomeSection;
