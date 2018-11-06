
const type = [];

const typeStatesReducer = (state = type, action) => {
    if (action.type === 'ADD_TYPE') {
        const item = action.item;
        return item.concat(state);
    }
    return state;
};

export default typeStatesReducer;
