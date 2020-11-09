import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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
    constructor(props){
        super(props);
        this.state = {
            focused: false
        }
    }
    handleInputFocus = () => {
        this.setState({
            focused: true
        });
    }
    handleInputBlur = () => {
        this.setState({
            focused: false
        });
    }
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
                        <CSSTransition
                            in={this.state.focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
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