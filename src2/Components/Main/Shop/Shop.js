import React, { Component } from 'react';
import {
    View, StyleSheet, Image
} from 'react-native';

import { connect } from 'react-redux';

import TabNavigator from 'react-native-tab-navigator';

import { url } from '../../../Utilities';

import getCart from '../../../api/getCart';

import Cart from './Cart/Cart.js';
import Contact from './Contact/Contact.js';
import Home from './Home/Home.js';
import Search from './Search/Search.js';

import Header from './Header';

import * as actionCreditors from '../../../redux/action';

import homeIcon from '../../../Media/Images/appIcon/home0.png';
import homeIconS from '../../../Media/Images/appIcon/home.png';
import cartIcon from '../../../Media/Images/appIcon/cart0.png';
import cartIconS from '../../../Media/Images/appIcon/cart.png';
import searchIcon from '../../../Media/Images/appIcon/search0.png';
import searchIconS from '../../../Media/Images/appIcon/search.png';
import contactIcon from '../../../Media/Images/appIcon/contact0.png';
import contactIconS from '../../../Media/Images/appIcon/contact.png';

class Shop extends Component {

    componentDidMount() {
        const { addTypes, addProducts, addToCart } = this.props;
        fetch(url) // eslint-disable-line
            .then(res => res.json())
            .then(resJson => {
                addTypes(resJson.type);
                addProducts(resJson.product);
            })
            .catch((e) => {
                console.log(e);
            }
            );

        getCart()
            .then(cartArray => {
                for (let i = 0; i < cartArray.length; i++) {
                    addToCart(cartArray[i].id, cartArray[i].price, cartArray[i].numberProduct);
                }
            }
            );
    }

    gotoMenu() {
        const { DrawerPropsShop } = this.props;
        DrawerPropsShop();
    }

    render() {
        const { arrayCart, selectTabState, tabHome, tabCart, tabSearch, tabContact } = this.props;
        return (
            <View style={styles.ComAuthentication}>
                <Header onOpen={this.gotoMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectTabState === 'home'}
                        title="Home"
                        renderIcon={() => <Image style={styles.imageStyle} source={homeIcon} />}
                        renderSelectedIcon={() => <Image style={styles.imageStyle} source={homeIconS} />}
                        badgeText=""
                        onPress={() => tabHome()}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectTabState === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image style={styles.imageStyle} source={cartIcon} />}
                        renderSelectedIcon={() => <Image style={styles.imageStyle} source={cartIconS} />}
                        badgeText={arrayCart.length}
                        onPress={() => tabCart()}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectTabState === 'search'}
                        title="Search"
                        renderIcon={() => <Image style={styles.imageStyle} source={contactIcon} />}
                        renderSelectedIcon={() => <Image style={styles.imageStyle} source={contactIconS} />}
                        badgeText=""
                        onPress={() => tabSearch()}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectTabState === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image style={styles.imageStyle} source={searchIcon} />}
                        renderSelectedIcon={() => <Image style={styles.imageStyle} source={searchIconS} />}
                        badgeText=""
                        onPress={() => tabContact()}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    ComAuthentication: {
        backgroundColor: 'white',
        flex: 1
    },
    imageStyle: {
        height: 20,
        width: 20
    }
});

const mapStateToProp = state =>
    ({ arrayCart: state.arrayCartStates, selectTabState: state.selectTabState });

export default connect(mapStateToProp, actionCreditors)(Shop);
