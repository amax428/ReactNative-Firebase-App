/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import { YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import ListItem from './src/screens/ListItem';

type Props = {};

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppNavigator = createStackNavigator ({
  HomeScreen: { screen: Home },
  AddItemScreen: {screen: AddItem},
  ListItemScreen: {screen: ListItem}
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
