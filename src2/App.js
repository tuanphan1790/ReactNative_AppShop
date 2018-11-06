import React, { Component } from 'react';
import {

} from 'react-native';

import CustomComponents from 'react-native-deprecated-custom-components';

import refreshToken from './api/refreshToken';

import Main from './Components/Main/Main.js';
import Authentication from './Components/Authentication/Authentication.js';
import ChangeInfor from './Components/ChangeInfor/ChangeInfor.js';
import OrderHistory from './Components/OrderHistory/OrderHistory.js';

export default class App extends Component {
    componentDidMount() {
        setInterval(refreshToken, 60000);
    }
    render() {
        return (
            <CustomComponents.Navigator
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN':
                            return <Main navigatorprops={navigator} />;
                        case 'AUTHENTICATION':
                            return <Authentication navigatorprops={navigator} />;
                        case 'CHANGE_INFOR':
                            return <ChangeInfor navigator={navigator} />;
                        case 'ORDER_HISTORY':
                            return <OrderHistory navigator={navigator} />;
                        default:
                            return <Main />;
                    }
                }
                }
            />
        );
    }
}
