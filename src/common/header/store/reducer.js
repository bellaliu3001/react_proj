const defaultState = {
    focused: false,
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'search_focus':
            return {
                focused: true
            }
        case 'search_blur':
            return {
                focused: false
            }
    }
    return state;
}