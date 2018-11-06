import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Dimensions, Image
} from 'react-native';

import bannerImage from '../../../../Media/Images/temp/banner.jpg';

const { height, width } = Dimensions.get('window');

const widthImage = width - 40;
const heightImage = (widthImage * 465) / 933;

export default class Collection extends Component {
    render() {
        return (
            <View style={styles.WrapStyle}>
                <View style={styles.ViewText} >
                    <Text style={styles.TextStyle}> SPRING COLLECTION </Text>
                </View>
                <View style={styles.ViewImage} >
                    <Image style={styles.ImageStyle} source={bannerImage} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    WrapStyle: {
        height: height * 0.33,
        margin: 10,
        backgroundColor: 'yellow',
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0
    },
    ImageStyle: {
        width: widthImage,
        height: heightImage
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
    }
});
