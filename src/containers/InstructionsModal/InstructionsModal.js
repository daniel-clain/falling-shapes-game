import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

export class InstructionsModal extends Component {  

  static propTypes = {
    instructions: PropTypes.arrayOf(PropTypes.string),
  }

  render() {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalWindow}>
          <Text>Instructions Modal</Text>
          <TouchableHighlight style={styles.startButton}>
            <Text style={styles.startButtonText}>Start Game</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {  
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    flex: 1,
    display: 'flex',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  modalWindow: {
    marginTop: 40,
    backgroundColor: '#fff',
    width: 300,
    padding: 20,
    borderRadius: 4
  },
  startButton: {
    marginTop: 30,
    width: 200,
    backgroundColor: '#48ACF0',    
    marginRight: 'auto', 
    marginLeft: 'auto',
    padding: 10,
    borderRadius: 2
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

