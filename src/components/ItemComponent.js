//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// create a component
class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
            return (
                <View key={index}>
                    <Text style={styles.itemtext}>{item.name}</Text>
                </View>
            )
        })}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  itemtext: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
  }
});

//make this component available to the app
export default ItemComponent;
