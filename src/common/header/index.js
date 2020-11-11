import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
    HeaderWrapper, 
    Logo, 
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    Searchwrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from './style.js';

class Header extends Component{

    getListArea = () => {
        if(this.props.focused){
            // console.log(this.props.list);
            return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一换</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {
                        this.props.list.map((item, i) => {
                            return <SearchInfoItem key={i}>{item}</SearchInfoItem>
                        })
                    }
                    
                </SearchInfoList>
            </SearchInfo>
            )
        } else {
            return null
        }
    }

    render(){
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
                            in={this.props.focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                        { this.getListArea() }
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

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: () => {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur: () => {
            dispatch(actionCreators.searchBlur());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);