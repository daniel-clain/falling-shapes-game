import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import InGame from './../InGame';

describe('<InGameScreen/>', () => {
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

  describe('After user hits "Start Game" button in <InstructionsModal/>', () => {
    beforeEach(() => instance.startGame());

    it('should setState isGameRunning to true', () => {
      expect(instance.state.isGameRunning).toBe(true);
    });

    it('should hide the <InstructionsModal/>', () => {
      expect(instance.state.showInstructionsModal).toBe(false);
    });
  });
});
