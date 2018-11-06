import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput
} from 'react-native';

import { connect } from 'react-redux';
import * as actionCreditors from '../../redux/action.js';

import getToken from '../../api/getToken';
import changeInfor from '../../api/changeInfor';

import backSpecial from '../../Media/Images/appIcon/back_white.png';

class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const { loginState } = this.props;
        this.state = {
            txtName: loginState.username,
            txtAddress: loginState.address,
            txtPhone: loginState.phoneNumber
        };
    }
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    gotoChangeInfor() {
        getToken()
            .then(
            res => {
                const { txtName, txtPhone, txtAddress } = this.state;
                const { loginedStatus } = this.props;
                changeInfor(res, txtName, txtPhone, txtAddress)
                    .then(resInfor => {
                        loginedStatus(resInfor.name,
                            resInfor.address,
                            resInfor.phone);
                            this.goBackToMain();
                    }
                    )
                    .catch(err => console.log(err));
            }
            )
            .catch(err => console.log(err)
            );
    }

    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { txtName, txtAddress, txtPhone } = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>User Infomation</Text>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={txtName}
                        onChangeText={text => this.setState({ ...this.state, txtName: text })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={txtAddress}
                        onChangeText={text => this.setState({ ...this.state, txtAddress: text })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={txtPhone}
                        onChangeText={text => this.setState({ ...this.state, txtPhone: text })}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={signInContainer} onPress={this.gotoChangeInfor.bind(this)}>
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});

const mapStateToProp = state => ({ loginState: state.loginState });

export default connect(mapStateToProp, actionCreditors)(ChangeInfo);
