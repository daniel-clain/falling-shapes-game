import React from 'react';
import { shallow } from 'enzyme';
import GameTitle from './..';

describe('rendering', () => {
  beforeEach(() => {
  })

  it('should have text containing Falling Shapes Game', () => {
    let wrapper;
    wrapper = shallow(<GameTitle/>)
    expect(wrapper.find('Text').contains('Falling Shapes Game')).toBe(true);
  })
})

