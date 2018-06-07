import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class InGame extends Component {  
  level = this.props.navigation.getParam('level')

  static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.level.name,
      gesturesEnabled: false
  });

  render() {
    return (
      <View style={styles.inGame}>
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

