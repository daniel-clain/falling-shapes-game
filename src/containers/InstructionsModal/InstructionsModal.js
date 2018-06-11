import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

let styles;

const InstructionsModal = props => (
  <View style={styles.modalWindow}>
    <Text>{props.instructions}</Text>
    <TouchableHighlight style={styles.startButton} onPress={props.startGameHandler}>
      <Text style={styles.startButtonText}>Start Game</Text>
    </TouchableHighlight>
  </View>
);

InstructionsModal.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  startGameHandler: PropTypes.func.isRequired,
};

styles = StyleSheet.create({
  modalWindow: {
    marginTop: 40,
    backgroundColor: '#fff',
    width: 300,
    padding: 20,
    borderRadius: 4,
  },
  startButton: {
    marginTop: 30,
    width: 200,
    backgroundColor: '#48ACF0',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 10,
    borderRadius: 2,
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default InstructionsModal;
