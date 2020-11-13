import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: "主题1",
            imgUrl: "https://source.unsplash.com/random"
        },
        {
            id: 2,
            title: "主题2",
            imgUrl: "https://source.unsplash.com/random"
        },
    ]
});

export default (state = defaultState, action) => {
    switch(action.type){

    }
    return state;
}