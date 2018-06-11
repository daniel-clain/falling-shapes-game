import React from 'react';
import { shallow } from 'enzyme';
import ShapeCollector from '../ShapeCollector';

describe('ShapeCollector', () => {
  let wrapper;
  let instance;
  beforeAll(() => {
    wrapper = shallow(<ShapeCollector shapeCollectedHandler={jest.fn()} />);
    instance = wrapper.instance();
  });
  describe('shapeEntersCollectionZone()', () => {
    it('should call onShapesCollection() with an effect if collector is in the right location', () => {
      instance.shapeEntersCollectionZone('shapeComponent', 2);
      const shapeCollectedHandlerSpy = jest.spyOn(instance.props, 'shapeCollectedHandler');
      const expectedEffect = 'doink';
      expect(shapeCollectedHandlerSpy).toBeCalledWith(expectedEffect);
    });
    xit('should not call shapeCollectedHandler() if collector is in the wrong location', () => {
      expect(true).toBeTruthy();
    });
  });
  xdescribe('update component props', () => {
    it('should update the collectorLocation state when component is update with a new collectorLocation prop', () => {
      expect(true).toBeTruthy();
    });
  });
});
