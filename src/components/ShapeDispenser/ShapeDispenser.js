import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import PropTypes from 'prop-types';
import Shape from './../Shape';

const dispenserImage = require('./../../images/dispenserImage_small.png');
const dispenserImageDispensing = require('./../../images/dispenserImage_small_dispensing.png');


let styles;

export default class ShapeDispenser extends Component {
  constructor(props) {
    super(props);
    this.shapesDispensedCount = 0;

    this.dispenseRandomShape = this.dispenseRandomShape.bind(this);
    this.moveOverRandomLane = this.moveOverRandomLane.bind(this);
    this.dispenseShapesLoop = this.dispenseShapesLoop.bind(this);
  }
  state = {
    position: 2,
    isDispensing: false,
  }

  componentDidUpdate() {
    clearInterval(this.dispenseLoop);
    if (this.props.isDoingDispenseRandomShapesLoop) {
      this.dispenseLoop = setInterval(this.props.isDoingDispenseRandomShapesLoop &&
        this.dispenseShapesLoop, 400);
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

  moveOverRandomLane() {
    const randomLane = Math.floor(((Math.random() * 3) + 1));
    this.setState({ position: randomLane });
    return new Promise(resolve => setTimeout(() => resolve(randomLane), 200));
  }

  dispenseShapesLoop() {
    this.moveOverRandomLane()
      .then(this.dispenseRandomShape);
  }


  dispenseRandomShape(randomLane) {
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


    this.props.shapeDispensedHandler(newRandomShape, randomLane);
    this.setState({ isDispensing: true });
    setTimeout(() => {
      this.setState({ isDispensing: false });
    }, 300);
  }

  render() {
    const { position } = this.state;
    let alignDispenserStyle;
    console.log('position: ', position);

    switch (position) {
      case 1: alignDispenserStyle = 'flex-start'; break;
      case 2: alignDispenserStyle = 'center'; break;
      case 3: alignDispenserStyle = 'flex-end'; break;
      default: alignDispenserStyle = 'center'; break;
    }
    return (
      <View style={[styles.dispenserContainer, { alignItems: alignDispenserStyle }]}>
        <View style={{ display: 'flex', width: '33%', paddingLeft: 20 }}>
          <Animated.Image
            source={this.state.isDispensing ? dispenserImageDispensing : dispenserImage}
          />
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  dispenserContainer: {
    display: 'flex',
    width: '100%',
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
