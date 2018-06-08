import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import LaneArea from '../../LaneArea';
import InstructionsModal from '../../InstructionsModal';

export class InGame extends Component {  
  level;

  constructor(props){
    super(props);
    if(props.navigation){
      this.level = props.navigation.getParam('level')
    }
  }

  static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.level.name,
      gesturesEnabled: false
  });

  static propTypes = {
    shapeTypes: PropTypes.arrayOf(PropTypes.string),
    shapeColors: PropTypes.arrayOf(PropTypes.string),
    shapeFallSpeed: PropTypes.number,
    shapeDispenseSpeed: PropTypes.number,
    startingTime: PropTypes.number,
    pointsForOneStar: PropTypes.number,
    pointsForTwoStars: PropTypes.number,
    pointsForThreeStars: PropTypes.number,
    levelInstructions: PropTypes.arrayOf(PropTypes.string),
    highScoreToBeat: PropTypes.number,
  }
  static defaultProps = { 
    shapeTypes: ['triangle','circle','square','star'],
    shapeColors: ['yellow', 'red', 'blue', 'green'],
    shapeFallSpeed: 100,
    shapeDispenseSpeed: 100,
    startingTime: 60,
    levelInstructions: ['Play for as long as you can to see if you can get a high score'],
    highScoreToBeat: 0, 
  };

  render() {
    return (
      <View style={styles.inGame}>
        <InstructionsModal/>
        <LaneArea/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inGame: {
    padding: 10,
    flex: 1,
    backgroundColor: '#222',
    flexDirection: 'column'
  }
})

