import React from 'react';
import { connect } from 'react-redux';
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
const Header = (props) => {
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
                        in={props.focused}
                        timeout={300}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
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
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: () => {
            const action = {
                type: "search_focus",
            }
            dispatch(action);
        },
        handleInputBlur: () => {
            const action = {
                type: "search_blur",
            }
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);