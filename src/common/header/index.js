import React from "react";
import { connect, Connect } from "react-redux";
import {CSSTransition} from 'react-transition-group';
// import { searchBlur, searchFocus } from "./store/actionCreator";
import {actionCreators} from './store';
import {    
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style';

const getListArea = (show) => {
    if (show){
        return (
            <SearchInfo>
                <SearchInfoTitle>
                        Hot Search
                        <SearchInfoSwitch>
                            Switch
                        </SearchInfoSwitch>
                </SearchInfoTitle>  
                    <SearchInfoList>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
        )
    }
    else{
        return null;
    }
}

const Header=(props)=>{
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
                            className={props.focused ? 'focused':''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}>                           
                        </NavSearch>
                    {/* </CSSTransition> */}
                <i className={props.focused ? 'focused iconfont': 'iconfont'}>
                    &#xe614;
                </i>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className = 'reg'>Register</Button>
                <Button className = 'newPost'>New Post</Button>
            </Addition>
        </HeaderWrapper>
    )
}


const mapStateToProps = (state) =>{
    return {
        focused: state.header.get('focused')   
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        handleInputFocus(){            
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)