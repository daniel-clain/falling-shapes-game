import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import {
  redStarImage,
  greenStarImage,
  blueStarImage,
  yellowStarImage,
  redTriangleImage,
  greenTriangleImage,
  blueTriangleImage,
  yellowTriangleImage,
  redSquareImage,
  greenSquareImage,
  blueSquareImage,
  yellowSquareImage,
  redCircleImage,
  greenCircleImage,
  blueCircleImage,
  yellowCircleImage,
} from './shapeImageSources';


const coloredShapeImagesObject = {
  red: {
    star: redStarImage,
    triangle: redTriangleImage,
    square: redSquareImage,
    circle: redCircleImage,
  },
  green: {
    star: greenStarImage,
    triangle: greenTriangleImage,
    square: greenSquareImage,
    circle: greenCircleImage,
  },
  blue: {
    star: blueStarImage,
    triangle: blueTriangleImage,
    square: blueSquareImage,
    circle: blueCircleImage,
  },
  yellow: {
    star: yellowStarImage,
    triangle: yellowTriangleImage,
    square: yellowSquareImage,
    circle: yellowCircleImage,
  },
};


export default class Shape extends Component {
  constructor(props) {
    super(props);
    this.fallingAnimation = new Animated.Value(0);
    this.state = {
      color: props.initialColor,
      shape: props.initialShape,
    };
  }
  componentDidMount() {
    Animated.timing(
      this.fallingAnimation,
      {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
      },
    ).start();
  }

  render() {
    const translateY = this.fallingAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 500],
    });

    return (
      <Animated.Image
        style={{ position: 'absolute', transform: [{ translateY }] }}
        source={coloredShapeImagesObject[this.state.color][this.state.shape]}
      />
    );
  }
}

Shape.propTypes = {
  initialColor: PropTypes.string.isRequired,
  initialShape: PropTypes.string.isRequired,
  fallSpeed: PropTypes.number.isRequired,
};
