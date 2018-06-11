import React from 'react';
import { shallow } from 'enzyme';
import LevelBox from './../LevelBox';

describe('Level Box', () => {
  let wrapper;
  beforeAll(() => {
    const level = {
      name: 'Level 1',
      stars: 0,
      locked: true,
    };
    wrapper = shallow(<LevelBox level={level} levelSelectHandler={jest.fn()} />);
  });

  it('should have the level name inside the box', () => {
    expect(wrapper.find('Text').contains('Level 1')).toBe(true);
  });

  xit('should show a padlock for a locked level', () => {
    const level = {
      name: 'Level 1',
      stars: 0,
      locked: true,
    };
    wrapper = shallow(<LevelBox level={level} levelSelectHandler={jest.fn()} />);

    // expect(wrapper.find())
  });

  xit('should show 3 stars for an unlocked level', () => {

  });

  xit('should have colored in stars for each star awarded', () => {

  });


  xdescribe('Clicking an unlocked box', () => {
    xit('should take you to the ingame view for that level', () => {

    });
  });

  xdescribe('Clicked a locked level', () => {
    xit('should not take you in game', () => {

    });
  });
});
