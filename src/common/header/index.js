import React, { Component } from "react";
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

class Header extends Component{

     getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];

        if (newList.length) {
            for (let i = (page-1)*10; i < page*10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn){
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                            Hot Search
                            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
                                Switch
                            </SearchInfoSwitch>
                    </SearchInfoTitle>  
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfo>
            )
        }
        else{
            return null;
        }
    }

    render (){
        const {focused, handleInputFocus, handleInputBlur, list} = this.props;
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
                                className={focused ? 'focused':''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}>                           
                            </NavSearch>
                        {/* </CSSTransition> */}
                    <i className={this.props.focused ? 'focused iconfont': 'iconfont'}>
                        &#xe614;
                    </i>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className = 'reg'>Register</Button>
                    <Button className = 'newPost'>New Post</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

// const getListArea = (show) => {
//     if (show){
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>
//                         Hot Search
//                         <SearchInfoSwitch>
//                             Switch
//                         </SearchInfoSwitch>
//                 </SearchInfoTitle>  
//                     <SearchInfoList>
//                         <SearchInfoItem>Education</SearchInfoItem>
//                         <SearchInfoItem>Education</SearchInfoItem>
//                         <SearchInfoItem>Education</SearchInfoItem>
//                         <SearchInfoItem>Education</SearchInfoItem>
//                         <SearchInfoItem>Education</SearchInfoItem>
//                         <SearchInfoItem>Education</SearchInfoItem>
//                     </SearchInfoList>
//                 </SearchInfo>
//         )
//     }
//     else{
//         return null;
//     }
// }




const mapStateToProps = (state) =>{
    return {
        // focused: state.getIn(['header','focused']),
         focused: state.header.get('focused') ,  
        list: state.header.get('list'),
        page: state.header.get('page'),
        totalPage: state.header.get('totalPage'),
        mouseIn: state.header.get('mouseIn'),        
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        handleInputFocus(list){    
            // (list.size > 0 ) && dispatch(actionCreators.getList());
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.onMouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.onMouseLeave());
        },
        handleChangePage(page, totalPage){
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
            console.log(page, totalPage)
            // dispatch(actionCreators.changePage());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)