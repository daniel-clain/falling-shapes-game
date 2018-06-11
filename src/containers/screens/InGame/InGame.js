
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import LaneArea from '../../LaneArea';
import StatsBar from './../../StatsBar';
import InstructionsModal from '../../InstructionsModal';
import ShapeDispenser from '../../../components/ShapeDispenser';
import ShapeCollector from '../../../components/ShapeCollector';

let styles;

export default class InGame extends Component {
  constructor(props) {
    super(props);
    this.level = props.navigation.state.params.level;
    this.state = {
      isGameRunning: false,
      showInstructionsModal: true,
    };
    this.shapeDispensed = this.shapeDispensed.bind(this);

    this.props.navigation.addListener('willBlur', () => this.exitingGame());
    this.shapeConfigObj = {
      shapeFallSpeed: this.level.shapeFallSpeed,
      shapeTypes: this.level.shapeTypes,
      shapeColors: this.level.shapeColors,
    };
  }

  exitingGame() {
    this.setState({ isGameRunning: false });
  }

  startGame = () => {
    this.setState({ showInstructionsModal: false });
    this.setState({ isGameRunning: true });
  }

  shapeCollectionHandler(effect) {
    this.statsBarRef.statsUpdate(effect);
  }

  shapePassingThroughCollectionZone(shape, lane) {
    this.laneAreaRef.shapeEntersCollectionZone(shape, lane);
  }

  shapeDispensed(dispensedShape, dispensedLane) {
    if (this.state.isGameRunning) {
      this.laneAreaRef.newShapeDispensedInLane(dispensedShape, dispensedLane);
    }
  }

  render() {
    return (
      <View style={styles.inGame}>
        { this.state.showInstructionsModal &&
          <View style={styles.modalContainer}>
            <InstructionsModal
              instructions={this.level.levelInstructions}
              startGameHandler={this.startGame}
            />
          </View>
        }
        <StatsBar
          inGameReference={(ref) => { this.statsBarRef = ref; }}
        />

        <ShapeDispenser
          shapeConfigObj={this.shapeConfigObj}
          shapeDispensedHandler={this.shapeDispensed}
          shapeDispenseSpeed={this.level.shapeDispenseSpeed}
          isDoingDispenseRandomShapesLoop={this.state.isGameRunning}
        />
        <LaneArea
          shapePassingThroughCollectionZoneHandler={this.shapePassingThroughCollectionZone}
          inGameReference={(ref) => { this.laneAreaRef = ref; }}
        />
        <ShapeCollector
          shapeCollectedHandler={this.shapeCollectionHandler}
        />

      </View>
    );
  }
}

styles = StyleSheet.create({
  inGame: {
    padding: 10,
    flex: 1,
    backgroundColor: '#222',
    flexDirection: 'column',
  },
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
    alignItems: 'center',
  },
});
InGame.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.name,
  gesturesEnabled: false,
});
