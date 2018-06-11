import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as shapeCollectorImage from './../../images/star.png';

let styles;

export default class ShapeCollector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectorLocation: props.collectorLocation,
    };
  }
  shapeEntersCollectionZone(shape, lane) {
    let shapeCaught;
    switch (lane) {
      case 1: if (this.state.collectorLocation === 'left') shapeCaught = true; break;
      case 2: if (this.state.collectorLocation === 'middle') shapeCaught = true; break;
      case 3: if (this.state.collectorLocation === 'right') shapeCaught = true; break;
      default: shapeCaught = false;
    }
    if (shapeCaught) {
      const effect = 'doink';
      this.props.shapeCollectedHandler(effect);
    }
  }

  render() {
    return (
      <Image
        style={styles[this.state.collectorLocation]}
        source={shapeCollectorImage}
      />
    );
  }
}

styles = StyleSheet.create({
  left: {
    marginRight: 'auto',
  },
  middle: {
    marginHorizontal: 'auto',
  },
  right: {
    marginLeft: 'auto',
  },
});

ShapeCollector.propTypes = {
  shapeCollectedHandler: PropTypes.func.isRequired,
  collectorLocation: PropTypes.string,
};

ShapeCollector.defaultProps = {
  collectorLocation: 'middle',
};
