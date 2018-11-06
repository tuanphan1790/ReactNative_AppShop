import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity, Image
} from 'react-native';

import { connect } from 'react-redux';
import * as actionCreditors from '../../../redux/action';
import saveToken from '../../../api/saveToken';
import saveCart from '../../../api/saveCart';

import profile from '../../../Media/Images/temp/profile.png';

class Menu extends Component {

    onSignOut() {
        const { logoffStatus, removeAllCart, calculatingTotalSale } = this.props;
        saveToken('');
        saveCart('');
        removeAllCart();
        calculatingTotalSale([]);
        logoffStatus();
    }

    gotoAuthentication() {
        const { NavigatorMenu } = this.props;
        NavigatorMenu.push({ name: 'AUTHENTICATION' });
    }

    gotoChangeInfor() {
        const { NavigatorMenu } = this.props;
        NavigatorMenu.push({ name: 'CHANGE_INFOR' });
    }

    gotoOrderHistory() {
        const { NavigatorMenu } = this.props;
        NavigatorMenu.push({ name: 'ORDER_HISTORY' });
    }
    render() {
        const { MenuStyle, ImageStyle, btnStyle, textStyle, btnSignInStyle, textSignIn, content, userNameStyle } = styles;
        const { loginState } = this.props;
        const LockoutView = (
            <View style={btnStyle} >
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={textStyle}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
        const LoginView = (
            <View style={content} >
                <Text style={userNameStyle}>{loginState.username}</Text>
                <View style={btnSignInStyle} >
                    <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                        <Text style={textSignIn}>Order History</Text>
                    </TouchableOpacity>
                </View>
                <View style={btnSignInStyle} >
                    <TouchableOpacity onPress={this.gotoChangeInfor.bind(this)} >
                        <Text style={textSignIn}>Change Infor</Text>
                    </TouchableOpacity>
                </View>
                <View style={btnSignInStyle} >
                    <TouchableOpacity onPress={this.onSignOut.bind(this)}>
                        <Text style={textSignIn}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        const MainView = loginState.statusLogin ? LoginView : LockoutView;
        return (
            <View style={MenuStyle}>
                <Image style={ImageStyle} source={profile} />
                {MainView}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    MenuStyle: {
        backgroundColor: '#34B089',
        flex: 1,
        borderRightWidth: 3,
        borderRightColor: 'white',
        alignItems: 'center',
        paddingTop: 20
    },
    ImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 30
    },
    btnStyle: {
        height: 30,
        paddingHorizontal: 60,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#34B089',
        fontSize: 15
    },
    btnSignInStyle: {
        height: 30,
        width: 200,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSignIn: {
        color: '#34B089',
        fontSize: 15
    },
    userNameStyle: {
        marginTop: 0,
        fontSize: 20,
        color: '#FFF',
        paddingBottom: 70
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProp = state => ({ loginState: state.loginState });

export default connect(mapStateToProp, actionCreditors)(Menu);
