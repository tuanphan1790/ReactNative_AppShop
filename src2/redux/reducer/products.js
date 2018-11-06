
const product = [];

const productStatesReducer = (state = product, action) => {
    if (action.type === 'ADD_PRODUCT') {
        const item = action.item;
        return item.concat(state);
    }
    return state;
};

export default productStatesReducer;
