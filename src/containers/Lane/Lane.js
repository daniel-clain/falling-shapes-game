import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

let styles;

export default class Lane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shapesInLaneArray: [],
    };
  }
  componentDidMount = () => {
    this.props.laneAreaReference(this);
  }
  componentWillUnmount = () => {
    this.props.laneAreaReference(null);
  }

  shapeEnterLane(shape) {
    this.setState(previousState => (
      { shapesInLaneArray: previousState.shapesInLaneArray.concat([shape]) }
    ));
    console.log('this.state.shapesInLaneArray: ', this.state.shapesInLaneArray);
  }

  render() {
    return (
      <View style={[styles.lane, this.props.lastLane && styles.lastLaneBorder]}>
        {this.state.shapesInLaneArray.map(shape => shape)}
      </View>
    );
  }
}

styles = StyleSheet.create({
  lane: {
    flex: 1,
    backgroundColor: '#777',
    borderLeftWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  lastLaneBorder: {
    borderRightWidth: 1,
  },
});

Lane.propTypes = {
  lastLane: PropTypes.bool,
  laneAreaReference: PropTypes.func.isRequired,
};
Lane.defaultProps = {
  lastLane: false,
};
