import React, { Component } from 'react';
import {
    View, StyleSheet
} from 'react-native';

import Drawer from 'react-native-drawer';

import { connect } from 'react-redux';
import * as actionCreditors from '../../redux/action.js';

import getToken from '../../api/getToken';
import checkLogin from '../../api/checkLogin';

import Menu from './Menu/Menu.js';
import Shop from './Shop/Shop.js';

class Main extends Component {
    componentDidMount() {
        const { loginedStatus } = this.props;
        getToken()
            .then(resToken => {
                checkLogin(resToken)
                    .then(resInfor => {
                        loginedStatus(resInfor.user.name, resInfor.user.address, resInfor.user.phone);
                    })
                    .catch(err => console.log(err));
            });
    }

    gotoAuthentication() {
        const { navigatorprops } = this.props;
        navigatorprops.push({ name: 'AUTHENTICATION' });
    }

    gotoChangeInfor() {
        const { navigatorprops } = this.props;
        navigatorprops.push({ name: 'CHANGE_INFOR' });
    }

    gotoOrderHistory() {
        const { navigatorprops } = this.props;
        navigatorprops.push({ name: 'ORDER_HISTORY' });
    }

    //Drawer menu
    closeControlPanel = () => {
        this.drawer.close();
    };

    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        return (
            <View style={styles.ComMain}>
                <Drawer
                    tapToClose
                    openDrawerOffset={0.4}
                    ref={(ref) => { this.drawer = ref; }}
                    content={<Menu NavigatorMenu={this.props.navigatorprops} />}
                >
                    <Shop DrawerPropsShop={this.openControlPanel.bind(this)} />
                </Drawer>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    ComMain: {
        backgroundColor: 'green',
        flex: 1
    }
});

export default connect(null, actionCreditors)(Main);
