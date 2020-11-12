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
        const { 
            focused, 
            list, 
            page,
            totalPage,
            mouseIn, 
            handleMouseEnter, 
            handleMouseLeave, 
            handlePageChange 
        } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        for(let i = (page - 1) * 10; i < page * 10; i++){
            if(jsList[i]){
                pageList.push(
                    <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return (
            <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch
                        onClick={
                            () => {handlePageChange(page, totalPage, this.spinIcon)}
                        }
                    ><i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一换</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    { pageList }
                </SearchInfoList>
            </SearchInfo>
            )
        } else {
            return null
        }
    }

    render(){
        const { focused, handleInputFocus, handleInputBlur } = this.props;
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
                            in={focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={ handleInputFocus }
                                onBlur={ handleInputBlur }
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
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
        },
        handleMouseEnter: () => {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave: () => {
            dispatch(actionCreators.mouseLeave());
        },
        handlePageChange: (page, totalPage, spin) => {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`;
            if(page < totalPage){
                dispatch(actionCreators.pageChange(page + 1));
            } else {
                dispatch(actionCreators.pageChange(1));
            }
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);