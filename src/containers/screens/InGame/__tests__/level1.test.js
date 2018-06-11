import React from 'react';
import { shallow } from 'enzyme';
import InGame from './../InGame';


const navigation = {
  addListener: jest.fn(),
  state: {
    params: {
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
};

describe('Level 1', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<InGame navigation={navigation} />);
  });

  xit('should blah', () => {
    console.log('level 1 test wrapper: ', wrapper);
    expect(true).toBeTruthy();
  });
});
