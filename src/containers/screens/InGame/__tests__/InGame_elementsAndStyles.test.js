import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import InGame from './../InGame';

describe('InGame', () => {
  let wrapper;
  let instance;

  const navigation = {
    addListener: jest.fn(),
    state: {
      params: {
        level: {
          name: 'Level 1',
          stars: 3,
          locked: false,
          shapeColors: [
            'yellow',
          ],
          shapeTypes: [
            'triangle',
          ],
          shapeFallSpeed: 9,
          shapeDispenseSpeed: 3,
          startingTime: 60,
          pointsForOneStar: null,
          pointsForTwoStars: null,
          pointsForThreeStars: null,
          levelInstructions: [
            'Gain as many poins as you can before the time runs out.',
            'Collecting a yellow shapes will give you 1 point.',
            'Collecting a triangle will make all shapes change lane.',
          ],
        },
      },
    },
  };

  beforeAll(() => {
    wrapper = shallow(<InGame navigation={navigation} />);
    instance = wrapper.instance();
  });

  it('should start with the <InstructionsModal/> displayed', () => {
    expect(wrapper.find('InstructionsModal')).toHaveLength(1);
  });

  it('should have a <ShapeDispenser/>', () => {
    expect(wrapper.find('ShapeDispenser')).toHaveLength(1);
  });
  it('should have a <ShapeCollector/>', () => {
    expect(wrapper.find('ShapeCollector')).toHaveLength(1);
  });
  it('should have a <LaneArea/>', () => {
    expect(wrapper.find('LaneArea')).toHaveLength(1);
  });
  it('should have a <StatsBar/>', () => {
    expect(wrapper.find('StatsBar')).toHaveLength(1);
  });
  it('should have a <InstructionsModal/>', () => {
    expect(wrapper.find('InstructionsModal')).toHaveLength(1);
  });

  it('should configure the game based on the level\'s configuration properties', () => {
    // const inGameRendering = renderer.create(<InGame navigation={navigation} />);
    // console.log('inGameRendering: ', inGameRendering);
    const { level } = navigation.state.params;
    expect(instance.level).toEqual(level);
    const instructionsModal = wrapper.find('InstructionsModal');
    expect(instructionsModal.prop('instructions')).toEqual(level.levelInstructions);
    console.log('instructionsModal: ', instructionsModal);
  });
});
