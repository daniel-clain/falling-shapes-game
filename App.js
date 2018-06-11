import { createStackNavigator } from 'react-navigation';
import LevelSelect from './src/containers/screens/LevelSelect';
import InGame from './src/containers/screens/InGame';

export default createStackNavigator({
  InGame: {
    screen: InGame,
  },
  LevelSelect: {
    screen: LevelSelect,
  },
}, {
  initialRouteName: 'LevelSelect',
});
