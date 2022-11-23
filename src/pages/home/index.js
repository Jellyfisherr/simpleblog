import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Authors from './components/Authors';

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style'

class Home extends Component {
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
            </HomeWrapper>
        )
    }
}

export default Home;