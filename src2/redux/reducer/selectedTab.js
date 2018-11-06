
const selectedTab = 'home';

const selectTabStateReducer = (state = selectedTab, action) => {
    if (action.type === 'TAB_HOME') {
        return 'home';
    }
    if (action.type === 'TAB_CART') {
        return 'cart';
    }
    if (action.type === 'TAB_SEARCH') {
        return 'search';
    }
    if (action.type === 'TAB_CONTACT') {
        return 'contact';
    }
    return state;
};

export default selectTabStateReducer;
