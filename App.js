import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { LevelSelectScreen, InGameScreen } from './src/containers/screens';

export default createStackNavigator({
    'LevelSelect': {
      screen: LevelSelectScreen
    },
    'InGame': {
      screen: InGameScreen
    },
  }, {
    initialRouteName: 'LevelSelect',
  }
);