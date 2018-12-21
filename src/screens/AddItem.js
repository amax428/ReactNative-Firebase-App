//import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableHighlight, Alert
} from 'react-native';
import { addItem } from '../services/ItemService';
import { db } from '../config/db';

// create a component
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.nativeEvent.text
    });
  }

  handleSubmit() {
    if (this.state.name == '') {
      Alert.alert('Please input any text for item name!')
      return;
    }
    addItem(this.state.name);
    Alert.alert('Item saved successfully')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput
          style = {styles.itemInput}
          onChange = {this.handleChange}
        />
        <TouchableHighlight
          style = {styles.button}
          underlayColor = "white"
          onPress = {this.handleSubmit}
        >
          <Text
            style = {styles.buttonText}
          >
            Add
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }  
});

//make this component available to the app
export default AddItem;
