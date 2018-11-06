import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
    Text, View, StyleSheet, Dimensions, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { urlImagesType } from '../../../../Utilities';

const { height, width } = Dimensions.get('window');

const widthImage = width - 40;
const heightImage = widthImage / 2;

class Category extends Component {
    gotoListProduct(type) {
        const { navigatorCat } = this.props;
        navigatorCat.push({ name: 'LIST_PRODUCT', type });
    }
    render() {
        const { type } = this.props;
        const swiper = (
            <Swiper>
                {
                    type.map((e, key) => (
                        <TouchableOpacity onPress={() => this.gotoListProduct(e)} key={key}>
                            <Image style={styles.ImageStyle} source={{ uri: `${urlImagesType}${e.image}` }} showsButtons >
                                <Text style={styles.titleStyle}> {e.name} </Text>
                            </Image>
                        </TouchableOpacity>
                    ))
                }
            </Swiper>
        );

        return (
            <View style={styles.WrapStyle}>
                <View style={styles.ViewText} >
                    <Text style={styles.TextStyle}> LIST OF CATEGORY </Text>
                </View>
                <View style={styles.ViewImage}>
                    {type.length ? swiper : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    WrapStyle: {
        height: height * 0.33,
        margin: 10,
        marginTop: 0,
        backgroundColor: 'yellow',
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0
    },
    ImageStyle: {
        width: widthImage,
        height: heightImage,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewImage: {
        flex: 4
    },
    ViewText: {
        flex: 1,
        justifyContent: 'center'
    },
    TextStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    titleStyle: {
        fontSize: 18,
        color: 'black'
    }
});

const mapStateToProp = state => ({ type: state.typeStates });

export default connect(mapStateToProp)(Category);
