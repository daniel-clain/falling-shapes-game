import React from 'react';
import { shallow } from 'enzyme';
import ShapeDispenser from './../ShapeDispenser';
// import Shape from './../../Shape';

const testProps = {
  shapeConfigObj: {
    shapeFallSpeed: 9,
    shapeColors: [
      'yellow',
    ],
    shapeTypes: [
      'triangle',
    ],
  },
  isDoingDispenseRandomShapesLoop: false,
  shapeDispenseSpeed: 3,
  shapeDispensedHandler: jest.fn(),
};

describe('ShapeDispenser', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ShapeDispenser {...testProps} />);
  });

  it('should have a place holder <Text/> element that says "dispenserContainer"', () => {
    const textElement = wrapper.find('Text');
    expect(textElement.contains('dispenserContainer')).toBe(true);
  });
});
