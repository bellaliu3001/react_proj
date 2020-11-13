import React, { Component } from 'react';
import Topics from './components/Topics';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import banner from '../../static/banner.png';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img src={banner} className="banner-img"/>
                    <Topics></Topics>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
export default Home;