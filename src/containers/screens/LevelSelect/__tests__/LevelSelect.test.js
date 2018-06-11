import React from 'react';
import { shallow } from 'enzyme';
import LevelSelect from './../LevelSelect';

describe('LevelSelect', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<LevelSelect />);
  });

  it('should have 6 level boxes', () => {
    expect(wrapper.find('LevelBox')).toHaveLength(6);
  });

  xdescribe('levelBoxClicked()', () => {
    xit('should navigate to in game if unlocked', () => {

    });
  });

  xit('should not have any unlocked level after a level with not stars awarded', () => {

  });

  xit('should always have the 1st level unlocked', () => {

  });
});
