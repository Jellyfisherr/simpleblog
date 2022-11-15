import React, {Component} from "react";
import {CSSTransition} from 'react-transition-group';
import {    
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
} from './style';

export default class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            focused: false 
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render(){
        return (
            <HeaderWrapper> 
                <Logo href='/'/> 
                <Nav>
                    <NavItem className="left active">Home</NavItem>
                    <NavItem className="left">Download App</NavItem>
                    <NavItem className="right">Login</NavItem>
                    <NavItem className="right">
                        <i className="iconfont"></i>
                    </NavItem>
                    <SearchWrapper>
                        {/* <CSSTransition
                            in={this.state.focused}
                            timeout={200}
                            className="slide"
                            > */}
                            <NavSearch 
                                className={this.state.focused ? 'focused':''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}>                           
                            </NavSearch>
                        {/* </CSSTransition> */}
                    <i className={this.state.focused ? 'focused iconfont': 'iconfont'}>
                        &#xe614;
                    </i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className = 'reg'>Register</Button>
                    <Button className = 'newPost'>New Post</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    handleInputFocus(){
        this.setState({
            focused: true
        })
    }
    handleInputBlur(){
        this.setState({
            focused: false
        })
    }
}