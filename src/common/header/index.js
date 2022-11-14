import React, {Component} from "react";
import {
    
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
} from './style';

export default class Header extends Component{

    render(){
        return (
            <HeaderWrapper> 
                <Logo href='/'/> 
                <Nav>
                    <NavItem className="left active">Home</NavItem>
                    <NavItem className="left">Download App</NavItem>
                    <NavItem className="right">Login</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className = 'reg'>Register</Button>
                    <Button className = 'newPost'>New Post</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}