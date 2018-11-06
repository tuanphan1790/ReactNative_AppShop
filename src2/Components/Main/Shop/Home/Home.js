import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';

import CustomComponents from 'react-native-deprecated-custom-components';

import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';

class Home extends Component {
    render() {
        return (
            <CustomComponents.Navigator
                initialRoute={{ name: 'HOME_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return <HomeView style={styles.HomeStyle} navigatorHomeView={navigator} />;
                        case 'LIST_PRODUCT': return <ListProduct type={route.type} navigator={navigator} />;
                        default: return <ProductDetail product={route.product} navigator={navigator} />;
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

export default Home;
