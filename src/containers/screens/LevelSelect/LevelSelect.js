import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LevelBox from './../../../components/LevelBox';

const { levels } = require('./levels.json');
const styles = StyleSheet.create(require('./style.json'));

export default class LevelSelect extends Component {
  constructor() {
    super();
    this.levelSelectHandler = this.levelSelectHandler.bind(this);
  }

  levelSelectHandler = selectedLevel =>
    (!selectedLevel.locked &&
      this.props.navigation.navigate('InGame', { level: selectedLevel }));

  levelBoxes = levels.map(level =>
    (<LevelBox
      key={level.name}
      levelSelectHandler={this.levelSelectHandler}
      level={level}
    />));

  render() {
    return (
      <View style={styles.screenPadding}>
        <Text style={styles.levelSelectTitle}>Level Select</Text>
        <View style={styles.levelBoxesContainer}>{this.levelBoxes}</View>
      </View>);
  }
}

LevelSelect.navigationOptions = {
  title: 'Falling Shapes Game',
};
