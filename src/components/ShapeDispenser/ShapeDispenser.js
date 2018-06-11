import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Shape from './../Shape';

let styles;

export default class ShapeDispenser extends Component {
  constructor(props) {
    super(props);
    this.shapesDispensedCount = 0;
  }

  componentDidUpdate() {
    if (this.props.isDoingDispenseRandomShapesLoop) {
      this.dispenseRandomShape();
    }
  }

  getRandomColor() {
    const { shapeColors } = this.props.shapeConfigObj;
    const numberOfColorOptions = shapeColors.length;
    const randomIndex = Math.floor(Math.random() * numberOfColorOptions);
    return shapeColors[randomIndex];
  }

  getRandomShape() {
    const { shapeTypes } = this.props.shapeConfigObj;
    const numberOfShapeOptions = shapeTypes.length;
    const randomIndex = Math.floor(Math.random() * numberOfShapeOptions);
    return shapeTypes[randomIndex];
  }

  dispenseRandomShape() {
    this.shapesDispensedCount += 1;

    const randomColor = this.getRandomColor();
    const randomShape = this.getRandomShape();

    const newRandomShape =
      (<Shape
        initialColor={randomColor}
        initialShape={randomShape}
        fallSpeed={this.props.shapeConfigObj.shapeFallSpeed}
        key={this.shapesDispensedCount}
      />);

    const randomLane = Math.floor((Math.random() * 3) + 1);

    this.props.shapeDispensedHandler(newRandomShape, randomLane);
    console.log('this.props.isDoingDispenseRandomShapesLoop: ', this.props.isDoingDispenseRandomShapesLoop);
    if (this.props.isDoingDispenseRandomShapesLoop) {
      setTimeout(() => this.dispenseRandomShape(), this.props.shapeDispenseSpeed * 1000);
    }
  }

  render() {
    return (
      <View style={styles.dispenserContainer}>
        <Text>dispenserContainer</Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  dispenserContainer: {
  },
});

ShapeDispenser.propTypes = {
  isDoingDispenseRandomShapesLoop: PropTypes.bool,
  shapeDispensedHandler: PropTypes.func.isRequired,
  shapeDispenseSpeed: PropTypes.number.isRequired,
  shapeConfigObj: PropTypes.shape({
    shapeFallSpeed: PropTypes.number,
    shapeTypes: PropTypes.array,
    shapeColors: PropTypes.array,
  }).isRequired,
};

ShapeDispenser.defaultProps = {
  isDoingDispenseRandomShapesLoop: false,
};
