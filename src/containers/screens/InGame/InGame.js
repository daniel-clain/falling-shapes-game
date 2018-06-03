import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class InGame extends Component {
  render() {
    const level = this.props.navigation.getParam('level')
    return (
      <View style={styles.inGame}>
        <Text style={styles.heading}>{level.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inGame: {
    padding: '5%',
  },
  heading: {      
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
    color: '#222'
  }
})

