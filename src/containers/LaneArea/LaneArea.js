import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lane from './../Lane'

export class LaneArea extends Component {  

  render() {
    return (
        <View style={styles.laneArea}>
            <Lane/>
            <Lane/>
            <Lane lastLane/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  laneArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  }
})

