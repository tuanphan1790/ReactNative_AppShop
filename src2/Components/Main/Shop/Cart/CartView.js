import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    Dimensions, StyleSheet, Image, ListView
} from 'react-native';

import { connect } from 'react-redux';

import * as actionCreditors from '../../../../redux/action';

import setOrderHistory from '../../../../api/setOrderHistory';

import { urlImagesProduct } from '../../../../Utilities';


import sp1 from '../../.././../Media/Images/temp/sp1.jpeg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component {
    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    increProduct(id) {
        const { increProduct } = this.props;
        increProduct(id);
    }

    decreProduct(id) {
        const { decreProduct } = this.props;
        decreProduct(id);
    }

    async beginCalculating() {
        const { arrayCart, calculatingTotalSale } = this.props;
        await calculatingTotalSale(arrayCart);
        const arrDetail = arrayCart.map(e => ({
            id: e.id,
            quantity: e.numberProduct
        }));

        setOrderHistory(arrDetail);
    }

    gotoremoveToCart(id) {
        const { removeToCart } = this.props;
        removeToCart(id);
    }

    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;
        const { arrayCart } = this.props;

        return (
            <View style={wrapper}>
                <ListView
                    contentContainerStyle={main}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(arrayCart)}
                    renderRow={item => (
                        <View style={product} >
                            <Image source={{ uri: `${urlImagesProduct}${item.numberImage}` }} style={productImage} />
                            <View style={[mainRight]}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={txtName}>{toTitleCase('black of the')}</Text>
                                    <TouchableOpacity onPress={() => this.gotoremoveToCart(item.id)}>
                                        <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={txtPrice}>{item.price}$</Text>
                                </View>
                                <View style={productController}>
                                    <View style={numberOfProduct}>
                                        <TouchableOpacity onPress={() => this.increProduct(item.id)}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                        <Text>{item.numberProduct}</Text>
                                        <TouchableOpacity onPress={() => this.decreProduct(item.id)}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={showDetailContainer} >
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity style={checkoutButton} onPress={this.beginCalculating.bind(this)}>
                    <Text style={checkoutTitle}>TOTAL {this.props.totalSale}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

const mapStateToProp = state => ({
    arrayCart: state.arrayCartStates,
    totalSale: state.calculatingSale
});

export default connect(mapStateToProp, actionCreditors)(CartView);
