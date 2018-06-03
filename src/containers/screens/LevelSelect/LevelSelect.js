import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameTitle from './../../../components/GameTitle';
import LevelBox from './../../../components/LevelBox';

export class LevelSelect extends Component {
  
  render() {
    const levels = [
      {
        name: 'Level 1',
        stars: 3,
        locked: false,
      },      
      {
        name: 'Level 2',
        stars: 0,
        locked: true,
      },
      {
        name: 'Level 3',
        stars: 0,
        locked: true,
      },
      {
        name: 'Level 4',
        stars: 0,
        locked: true,
      },      
      {
        name: 'Level 5',
        stars: 0,
        locked: true,
      },
      {
        name: 'Level 6',
        stars: 0,
        locked: true,
      }
    ];
    const levelBoxClicked = level => {
      if(level.locked) return;
      this.props.navigation.navigate('InGame', {level: level})
    };
    const levelBoxes = levels.map((level, index) => 
      <LevelBox key={index} level={level} clickHandler={levelBoxClicked}/>
    )
    console.log(this.props);


    return (
      <View style={styles.levelSelect}>
        <GameTitle/>
        <Text style={styles.heading}>Level Select</Text>
        <View style={styles.levelBoxesContainer}>{levelBoxes}</View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    levelSelect: {
      padding: '5%',
    },
    heading: {      
      fontSize: 18,
      textAlign: 'left',
      marginBottom: 10,
      color: '#222'
    },
    levelBoxesContainer:{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
})
