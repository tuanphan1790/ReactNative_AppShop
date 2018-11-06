import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, Image, ListView, RefreshControl
} from 'react-native';

import { connect } from 'react-redux';
import { urlImagesProduct } from '../../../../Utilities';
import listProduct from '../../../../api/listProducts';

import * as actionCreditors from '../../../../redux/action';

import backList from '../../../../Media/Images/appIcon/back_white.png';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class ListProduct extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds,
            refreshing: false,
            pageNumber: 1
        };
        this.arr = []; 
    }

    componentDidMount() {
        const { type } = this.props;
        listProduct(type.id, this.state.pageNumber)
            .then(res => {
                this.arr = res;
                this.setState({ listProducts: this.state.listProducts.cloneWithRows(this.arr) }); //Không dùng res để đưa vào hàm cloneWithRows vì hàm này không nối mảng được
            }
            )
            .catch(err => console.log(err));
    }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    FilterProductList(arr, typeId) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].idType === typeId) {
                return arr[i];
            }
        }
        return null;
    }

    goOnRefresh() {
        this.setState({
            refreshing: true,
            //pageNumber: this.state.pageNumber + 1 ----- Khong setState ở đây vì setState là asynch vì thế state có thể chưa được cập nhật thì đã gọi hàm listProduct ở dưới
        });
        const newPage = this.state.pageNumber + 1;
        listProduct(this.props.type.id, newPage)
            .then((res) => {
                this.arr = res.concat(this.arr);
                this.setState({
                    refreshing: false,
                    listProducts: this.state.listProducts.cloneWithRows(this.arr),
                    pageNumber: newPage
                });
            });
    }

    render() {
        const {
            container, header, wrapper, backStyle, titleStyle,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
         } = styles;
        const { type } = this.props;

        //type : duoc truyen tu Catergory
        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={backList} style={backStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>{type.name}</Text>
                    <View style={{ width: 30 }} />
                </View>
                <ListView
                    contentContainerStyle={wrapper}
                    enableEmptySections
                    dataSource={this.state.listProducts}
                    renderRow={product => (
                        <View style={productContainer}>
                            <Image source={{ uri: `${urlImagesProduct}${product.images[0]}` }} style={productImage} />
                            <View style={productInfo}>
                                <Text style={txtName}>{toTitleCase(product.name)}</Text>
                                <Text style={txtPrice}>{product.price}$</Text>
                                <Text style={txtMaterial}>{product.material}</Text>
                                <View style={lastRowInfo}>
                                    <Text style={txtColor}>{product.color}</Text>
                                    <View style={{ backgroundColor: product.color.toLowerCase(), height: 16, width: 16, borderRadius: 8 }} />
                                    <TouchableOpacity onPress={() => this.gotoDetail(product)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.goOnRefresh.bind(this)}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});

const mapStateToProp = state => ({ productList: state.productStates });

export default connect(mapStateToProp, actionCreditors)(ListProduct);
