import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Authors from './components/Authors';
import { actionCreator } from './store';
import { BackTop } from './style';

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style'
// import { ResultType } from '@remix-run/router/dist/utils';

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' 
                    alt=''
                    src="https://upload.jianshu.io/admin_banners/web_images/5067/5c739c1fd87cbe1352a16f575d2df32a43bea438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic />
                    <List />                    
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Authors />
                </HomeRight>
                { this.props.showScroll ?
                <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow );

    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.home.get('showScroll')
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreator.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreator.toggleTopShow(true))
        }else {
            dispatch(actionCreator.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch) (Home);