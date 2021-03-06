import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    TopicWrapper,
    TopicItem,
} from '../style';

class Topics extends Component {
    render() {
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {
                    topicList.map((item, i) => {
                       return (
                            <TopicItem key={item.get('id')}>
                                <img className="topic-pic" src={item.get('imagUrl')} alt=""/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }

            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList']),
    };
}
export default connect(mapStateToProps, null)(Topics);