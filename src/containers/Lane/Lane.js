import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Lane = props => {  
  return (
      <View style={[styles.lane, props.lastLane && styles.lastLaneBorder]}>
      </View>
  );
}

const styles = StyleSheet.create({
  lane: {
    flex: 1,
    backgroundColor: '#111',
    borderLeftWidth: 1,
    borderColor: '#eee'
  },
  lastLaneBorder: {
    borderRightWidth: 1
  }
});

export default Lane;

