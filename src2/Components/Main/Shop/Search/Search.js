import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';

import CustomComponents from 'react-native-deprecated-custom-components';

import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail.js';

class Search extends Component {
    render() {
        return (
            <CustomComponents.Navigator
                initialRoute={{ name: 'SEARCH_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'SEARCH_VIEW': return <SearchView navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} product={route.product} />;
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

export default Search;
