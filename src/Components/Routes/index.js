// import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import {createDrawerNavigator} from 'react-navigation-drawer';
import Login from '../Login';
import Home from '../Home';
import CreateAccount from '../CreateAccount';

class Routes {
  tabNavigator = createMaterialTopTabNavigator({
    Home: Home,
    Upload: {
      screen: Home,
    },
    Sync: {
      screen: Home,
    },
    Download: {
      screen: Home,
    },
    Settings: {
      screen: Home,
    },
  });

  switchNavigator = createSwitchNavigator({
    Login: {
      screen: Login,
    },
    Home: {
      screen: this.tabNavigator,
    },
    CreateAccount: {
      screen: CreateAccount,
    },
  });
  appContainer = createAppContainer(this.switchNavigator);
}

export default new Routes().appContainer;
