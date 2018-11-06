const arrSearch = [];

const arraySearchStatesReducer = (state = arrSearch, action) => {
    switch (action.type) {
        case 'ADD_SEARCHVIEW':
            {
                return action.product;
            }
        default:
            return state;
    }
};

export default arraySearchStatesReducer;
