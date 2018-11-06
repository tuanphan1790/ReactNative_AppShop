import React, { Component } from 'react';
import {
    Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, ListView
} from 'react-native';

import { connect } from 'react-redux';

import { urlImagesProduct } from '../../../../Utilities';

class TopProduct extends Component {

    gotoProductDetail(product) {
        const { navigatorPro } = this.props;
        navigatorPro.push({ name: 'PRODUCT_DETAIL', product });
    }

    render() {
        const { container, titleContainer, title, body, bodyProduct, productImage, productName, productPrice } = styles;
        const { product } = this.props;
        console.log('FFFFFFFFFFFFF');
        console.log(product);
        console.log('FFFFFFFFFFFFF');
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <ListView
                    contentContainerStyle={body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(product)}
                    renderRow={_product => (
                        <TouchableOpacity style={bodyProduct} onPress={() => this.gotoProductDetail(_product)}>
                            <Image style={productImage} source={{ uri: `${urlImagesProduct}${_product.images[0]}` }} />
                            <Text style={productName}>{_product.name.toUpperCase()}</Text>
                            <Text style={productPrice}>{_product.price}</Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionId, rowId) => {
                        if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
                        return null;
                    }}
                />
            </View>
        );
    }
}
// onPress={this.gotoProductDetail(e).bind(this)} 
const { width } = Dimensions.get('window');
const widthImages = (width - 60) / 2;
const heightImages = (widthImages * 452) / 361;

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        margin: 10,
        backgroundColor: 'yellow',
        justifyContent: 'center'
    },
    titleContainer: {
        margin: 10
    },
    title: {

    },
    body: {
        marginTop: 0,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingBottom: 0
    },
    bodyProduct: {
        paddingBottom: 0
    },
    productImage: {

        width: widthImages,
        height: heightImages
    },
    productName: {
        paddingLeft: 10,
    },
    productPrice: {
        paddingLeft: 10,
        fontSize: 12
    }
});

const mapStateToProp = state => ({ product: state.productStates });

export default connect(mapStateToProp)(TopProduct);
