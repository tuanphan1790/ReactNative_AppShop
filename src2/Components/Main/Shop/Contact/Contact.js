import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
//import MapView from 'react-native-maps';

import phoneIcon from '../../../../Media/Images/appIcon/phone.png';
import mailIcon from '../../../../Media/Images/appIcon/mail.png';
import messageIcon from '../../../../Media/Images/appIcon/message.png';
import locationIcon from '../../../../Media/Images/appIcon/location.png';

import mapImg from '../../../../Media/Images/map.png';

class Contact extends Component {
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText, mapStyle
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    <Image style={mapStyle} source={mapImg} />
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={locationIcon} style={imageStyle} />
                        <Text style={infoText}>So 08 Tran Hung Dao</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={phoneIcon} style={imageStyle} />
                        <Text style={infoText}>(+84) 01689974838</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={mailIcon} style={imageStyle} />
                        <Text style={infoText}>tuanpa.bkhn@gmail.com</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <Image source={messageIcon} style={imageStyle} />
                        <Text style={infoText}>(+84) 01689974838</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500'
    }
});

export default Contact;
