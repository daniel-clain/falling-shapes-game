import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

const LevelBox = props => {

  const padlockImage = <Image style={styles.padlockImage} resizeMode='contain' source={require('./../../images/lock.png')}/>

  let starImages = [];
  for(let i = 0; i < props.level.stars; i++) {
    starImages.push(
    <Image 
      style={styles.starImage} 
      resizeMode='contain' 
      key={i}
      source={require('./../../images/star.png')} 
    />)
  }
  const starsViewBlock = <View style={styles.starsViewBlock}>{starImages}</View>

  console.log('stars ', starImages)

  return (
    <TouchableHighlight 
      style={[styles.levelBoxTouchable, props.level.locked ? styles.levelLocked : '']} 
      onPress={() => props.clickHandler(props.level)}>
      <View style={styles.levelBoxContent}>
        <Text style={styles.levelBoxText}>{props.level.name}</Text>
        {props.level.locked ? padlockImage : starsViewBlock}
      </View>
    </TouchableHighlight>
  );
}

styles = StyleSheet.create({
  levelBoxTouchable: {
    width: '18%',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#222',
    backgroundColor: '#55b',
    height: 70,
    padding: 10
  },
  levelLocked: {
    borderColor: '#999',
    backgroundColor: '#77a',
  },
  levelBoxContent: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  levelBoxText: {
    fontSize: 14,
    color: 'white',
  },
  padlockImage: {
    marginTop: 10,
  },
  starsViewBlock: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',

  },
  starImage: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

export default LevelBox;
