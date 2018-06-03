import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class GameTitle extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.gametitle}>Falling Shapes Game</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gametitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'green',
    textAlign: "center",
    marginBottom: 10
  },
})
