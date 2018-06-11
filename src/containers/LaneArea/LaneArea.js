import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Lane from './../Lane';

let styles;

export default class LaneArea extends Component {
  componentDidMount = () => {
    this.props.inGameReference(this);
  }
  componentWillUnmount = () => {
    this.props.inGameReference(null);
  }

  laneRefArray = Array(3);

  newShapeDispensedInLane(shape, lane) {
    this.laneRefArray[lane - 1].shapeEnterLane(shape);
  }

  render() {
    const handler = this.props.shapePassingThroughCollectionZoneHandler;
    return (
      <View style={styles.laneArea}>
        <Lane
          laneAreaReference={(ref) => { this.laneRefArray[0] = ref; }}
          shapePassingThroughCollectionZoneHandler={handler}
        />
        <Lane
          laneAreaReference={(ref) => { this.laneRefArray[1] = ref; }}
          shapePassingThroughCollectionZoneHandler={handler}
        />
        <Lane
          laneAreaReference={(ref) => { this.laneRefArray[2] = ref; }}
          shapePassingThroughCollectionZoneHandler={handler}
          lastLane
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
  laneArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
});

LaneArea.propTypes = {
  shapePassingThroughCollectionZoneHandler: PropTypes.func.isRequired,
  inGameReference: PropTypes.func.isRequired,
};
