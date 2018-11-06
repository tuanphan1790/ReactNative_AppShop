import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';

import CustomComponents from 'react-native-deprecated-custom-components';

import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail.js';


class Cart extends Component {
    render() {
        return (
            <CustomComponents.Navigator
                initialRoute={{ name: 'CART_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CART_VIEW': return <CartView navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    HomeStyle: {
        backgroundColor: '#DBDBD8',
        flex: 1
    }
});

export default Cart;
