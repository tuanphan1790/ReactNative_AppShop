import saveCart from '../../api/saveCart';

class Item {
    constructor(id, price, numberProduct, numberImage) {
        this.id = id;
        this.price = price;
        this.numberProduct = numberProduct;
        this.numberImage = numberImage;
    }
}

const arrayCart = [];

function checkId(arr, id) {
    let check = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            check = false;
            break;
        }
    }
    return check;
}

export const arrayCartStatesReducer = (state = arrayCart, action) => {
    switch (action.type) {
        case 'ADD_TOCART':
            {
                if (checkId(state, action.id)) {
                    const item = new Item(action.id, action.price, action.numberProduct, action.numberImage);
                    const xstate = [item].concat(state);
                    saveCart(xstate);
                    return xstate;
                }
                return state;
            }
        case 'REMOVE_CART':
            {
                const xstate = state.filter((item) => item.id !== action.id);
                saveCart(xstate);
                return xstate;
            }
        case 'REMOVE_ALL_CART':
            {
                return [];
            }
        case 'INCRE_PRODUCT':
            {
                return state.map(item => {
                    if (item.id !== action.id) {
                        return item;
                    }
                    return {
                        ...item,
                        numberProduct: item.numberProduct + 1
                    };
                }
                );
            }
        case 'DECRE_PRODUCT':
            {
                return state.map(item => {
                    if (item.id !== action.id) {
                        return item;
                    }
                    return {
                        ...item,
                        numberProduct: item.numberProduct - 1
                    };
                }
                );
            }
        default:
            return state;
    }
};

const calculatingSaleProduct = 0;

export const calculatingSaleProductReducer = (state = calculatingSaleProduct, action) => {
    if (action.type === 'CALCULATING_TOTAL') {
        let myTotal = 0;
        for (let i = 0, len = action.arr.length; i < len; i++) {
            myTotal += action.arr[i].price * action.arr[i].numberProduct;
        }
        return myTotal;
    }
    return state;
};
