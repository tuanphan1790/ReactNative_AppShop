import React, { Component } from 'react';
import {
    ScrollView, StyleSheet
} from 'react-native';

import Collection from './Collection.js';
import Category from './Category';
import TopProduct from './TopProduct.js';

class HomeView extends Component {
    render() {
        return (
            <ScrollView style={styles.HomeStyle}>
                <Collection />
                <Category navigatorCat={this.props.navigatorHomeView} />
                <TopProduct navigatorPro={this.props.navigatorHomeView} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    HomeStyle: {
        backgroundColor: '#DBDBD8',
        flex: 1
    }
});

export default HomeView;
