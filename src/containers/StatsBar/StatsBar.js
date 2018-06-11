import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

let styles;

export default class StatsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: 60,
      life: 3,
      points: 0,
    };
  }
  componentDidMount = () => {
    this.props.inGameReference(this);
  }
  componentWillUnmount = () => {
    this.props.inGameReference(null);
  }
  statsUpdate(effect) {
    if (effect) {
      this.setState(previousState => (
        { life: previousState + 1 }
      ));
    }
  }

  render() {
    return (
      <View style={styles.statsContainer}>
        <Text>Stats go here</Text>
        <Text>{`${this.state.life} ${this.state.timeRemaining} ${this.state.points}`}</Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  statsContainer: {
    height: 30,
    backgroundColor: '#243',
  },
});

StatsBar.propTypes = {
  inGameReference: PropTypes.func.isRequired,
};
