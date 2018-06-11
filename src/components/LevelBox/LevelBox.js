import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import * as lockImage from './../../images/lock.png';
import * as starImage from './../../images/star.png';

let styles;

const LevelBox = (props) => {
  const padlockImage = <Image style={styles.padlockImage} resizeMode="contain" source={lockImage} />;

  const starImages = [];
  for (let i = 0; i < props.level.stars; i += 1) {
    starImages.push(<Image
      style={styles.starImage}
      resizeMode="contain"
      key={i}
      source={starImage}
    />);
  }
  const starsViewBlock = <View style={styles.starsViewBlock}>{starImages}</View>;

  return (
    <TouchableOpacity
      style={[
        styles.levelBoxTouchable,
        props.level.locked ? styles.levelLocked : '',
      ]}
      onPress={() => props.levelSelectHandler(props.level)}
    >
      <View style={styles.levelBoxContent}>
        <Text style={styles.levelBoxText}>{props.level.name}</Text>
        {props.level.locked ? padlockImage : starsViewBlock}
      </View>
    </TouchableOpacity>
  );
};

styles = StyleSheet.create({
  levelBoxTouchable: {
    width: '18%',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#222',
    backgroundColor: '#55b',
    height: 70,
    padding: 10,
  },
  levelLocked: {
    borderColor: '#999',
    backgroundColor: '#77a',
  },
  levelBoxContent: {
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    justifyContent: 'space-between',
  },
});


LevelBox.propTypes = {
  level: PropTypes.shape({
    name: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    locked: PropTypes.bool.isRequired,
  }).isRequired,
  levelSelectHandler: PropTypes.func.isRequired,
};

export default LevelBox;
