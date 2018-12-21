//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text onPress={() => navigate('AddItemScreen')}>Add Item</Text>
        <Text onPress={() => navigate('ListItemScreen')}>List Item</Text>
      </View>
    );
  }
}

// def ine your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Home;
