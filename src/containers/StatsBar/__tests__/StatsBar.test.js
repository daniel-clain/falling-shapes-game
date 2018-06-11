import React from 'react';
import { shallow } from 'enzyme';
import StatsBar from './../StatsBar';

describe('<StatsBar/>', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<StatsBar
      inGameReference={() => { }}
    />);
  });
  it('should have test place holder', () => {
    expect(wrapper.find('Text').contains('Stats go here')).toBe(true);
  });
});
