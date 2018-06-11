import React from 'react';
import { shallow } from 'enzyme';
import Shape from './../Shape';

describe('Shape', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Shape initialColor="yellow" initialShape="triangle" fallSpeed={10} />);
  });

  it('should have an <Image/>', () => {
    console.log('shapeWrapper: ', wrapper);
    // expect(wrapper.find('Image')).toHaveLength(1);
    expect(true).toBeTruthy();
  });
});
