import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import * as actionCreditors from '../../redux/action';

import signIn from '../../api/signIn';
import saveToken from '../../api/saveToken';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    onSignIn() {
        const { email, password } = this.state;
        const { loginedStatus } = this.props;
        signIn(email, password)
            .then(res => {
                loginedStatus(
                    res.user.name,
                    res.user.address,
                    res.user.phone
                );
                saveToken(res.token);
            })
            .catch(err => console.log(err));
        this.props.goBackToMain();
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});

export default connect(null, actionCreditors)(SignIn);
