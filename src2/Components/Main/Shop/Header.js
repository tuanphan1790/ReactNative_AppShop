import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image
} from 'react-native';

import { connect } from 'react-redux';
import * as actionCreditors from '../../../redux/action';

import searchProduct from '../../../api/searchProduct';

import iclogoMenu from '../../../Media/Images/appIcon/ic_menu.png';
import iclogo from '../../../Media/Images/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    goOnChange() {
        const { tabSearch } = this.props;
        tabSearch();
    }

    goOnSearch() {
        const { text } = this.state;
        searchProduct(text)
            .then(res => {
                const { addListSearch } = this.props;
                addListSearch(res);
                this.setState({
                    text: ''
                });
            }
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <View style={styles.Tabbar}>
                <View style={styles.ViewUp}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={iclogoMenu} style={styles.IconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.titles}> Wearing a Dress </Text>
                    <Image source={iclogo} style={styles.IconStyle} />
                </View>
                <TextInput
                    style={styles.InputText}
                    placeholder='What do you want to buy?'
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    onChange={this.goOnChange.bind(this)}
                    onSubmitEditing={this.goOnSearch.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Tabbar: {
        padding: 10,
        backgroundColor: '#34B089',
        height: height / 7,
        justifyContent: 'space-around'
    },
    ViewUp: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    InputText: {
        height: height / 21,
        backgroundColor: 'white',
    },
    IconStyle: {
        height: 25,
        width: 25
    },
    titles: {
        fontSize: 20,
        color: '#FFF',
        paddingLeft: 10
    }
});

export default connect(null, actionCreditors)(Header);
