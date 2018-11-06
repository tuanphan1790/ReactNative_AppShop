export const addTypes = (item) => ({ type: 'ADD_TYPE', item });

export const addProducts = (item) => ({ type: 'ADD_PRODUCT', item });

export const addToCart = (id, price, numberProduct, numberImage) =>
    ({ type: 'ADD_TOCART', id, price, numberProduct, numberImage });
export const removeToCart = (id) => ({ type: 'REMOVE_CART', id });
export const removeAllCart = () => ({ type: 'REMOVE_ALL_CART' });

export const increProduct = (id) => ({ type: 'INCRE_PRODUCT', id });
export const decreProduct = (id) => ({ type: 'DECRE_PRODUCT', id });

export const calculatingTotalSale = (arr) => ({ type: 'CALCULATING_TOTAL', arr });

export const removeItem = (index) => ({ type: 'REMOVE_ITEMS', index });

export const loginedStatus = (username, address, phoneNumber) =>
    ({ type: 'ISLOGINED', username, address, phoneNumber });
export const logoffStatus = () => ({ type: 'ISLOGOFF' });

export const tabHome = () => ({ type: 'TAB_HOME' });
export const tabCart = () => ({ type: 'TAB_CART' });
export const tabSearch = () => ({ type: 'TAB_SEARCH' });
export const tabContact = () => ({ type: 'TAB_CONTACT' });

export const addListSearch = (product) => ({ type: 'ADD_SEARCHVIEW', product });

