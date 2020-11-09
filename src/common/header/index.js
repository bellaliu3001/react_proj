import React, { Component } from 'react';
import { 
    HeaderWrapper, 
    Logo, 
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    Searchwrapper
} from './style.js';
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <Searchwrapper>
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe614;</i>
                    </Searchwrapper>
                    <Addition>
                        <Button className="writting">
                            <i className="iconfont">&#xe708;</i>
                            写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header