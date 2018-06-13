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
  let instance;
  let wrapper;
  let componentDidUpdateSpy;
  let dispenseRandomShapeSpy;

  beforeEach(() => {
    wrapper = shallow(<ShapeDispenser {...testProps} />);
    instance = wrapper.instance();
    componentDidUpdateSpy = jest.spyOn(instance, 'componentDidUpdate');
    dispenseRandomShapeSpy = jest.spyOn(instance, 'dispenseRandomShape');
  });

  it('should not be dispensing <Shape/>s until props from <InGame/> has isDoingDispenseRandomShapesLoop as true', () => {
    expect(componentDidUpdateSpy).not.toBeCalled();
    expect(dispenseRandomShapeSpy).not.toBeCalled();
    expect(instance.props.isDoingDispenseRandomShapesLoop).toBe(false);
  });

  describe('when <InGame /> updates <ShapeDispenser/>\'s props and changes isDoingDispenseRandomShapesLoop from false to true', () => {
    beforeEach(() => {
      wrapper.setProps({ isDoingDispenseRandomShapesLoop: true });
    });

    it('should call componentDidUpdate()', () => {
      expect(componentDidUpdateSpy).toBeCalled();
    });

    it('should update isDoingDispenseRandomShapesLoop from false to true', () => {
      expect(instance.props.isDoingDispenseRandomShapesLoop).toBe(true);
    });

    it('should call dispenseRandomShape()', () => {
      expect(dispenseRandomShapeSpy).toBeCalled();
    });
  });

  describe('dispenseRandomShape()', () => {
    const resetDispenseRandomShapeLoop = (done) => {
      wrapper.setProps({ isDoingDispenseRandomShapesLoop: false });
      dispenseRandomShapeSpy.mockClear();
      setTimeout(() => {
        expect(dispenseRandomShapeSpy).not.toBeCalled();
        done();
      }, instance.props.shapeDispenseSpeed * 1000);
      jest.advanceTimersByTime(instance.props.shapeDispenseSpeed * 1000);
    };

    beforeEach(() => {
      wrapper.setProps({ isDoingDispenseRandomShapesLoop: true });
      jest.useFakeTimers();
    });

    it('should stop calling its self if isDoingDispenseRandomShapesLoop is false', (done) => {
      expect(dispenseRandomShapeSpy).toBeCalled();
      dispenseRandomShapeSpy.mockClear();
      wrapper.setProps({ isDoingDispenseRandomShapesLoop: false });
      expect(componentDidUpdateSpy).toBeCalled();
      console.log('set to false, now waiting 1 cycle');
      setTimeout(() => {
        console.log('should not be called');
        expect(dispenseRandomShapeSpy).not.toBeCalled();
        done();
      }, instance.props.shapeDispenseSpeed * 1000);
      jest.advanceTimersByTime(instance.props.shapeDispenseSpeed * 1000);
    });

    it('should call itself again after shapeDispenseSpeed if isDoingDispenseRandomShapesLoop is true', (done) => {
      // instance.dispenseRandomShape();
      dispenseRandomShapeSpy.mockClear();
      setTimeout(() => {
        expect(dispenseRandomShapeSpy).toHaveBeenCalledTimes(1);
        resetDispenseRandomShapeLoop(done);
      }, instance.props.shapeDispenseSpeed * 1000);
      jest.advanceTimersByTime(instance.props.shapeDispenseSpeed * 1000);
    });

    describe('after waiting 10 seconds', () => {
      const wrapper2 = shallow(<ShapeDispenser {...testProps} />);
      const instance2 = wrapper2.instance();
      const dispenseRandomShapeSpy2 = jest.spyOn(instance2, 'dispenseRandomShape');
      instance2.resetDispenseRandomShapeLoop();
      it('should have been called 3 additional times', (done) => {
        // instance.dispenseRandomShape();
        // dispenseRandomShapeSpy.mockClear();
        setTimeout(() => {
          expect(dispenseRandomShapeSpy2).toHaveBeenCalledTimes(3);
          resetDispenseRandomShapeLoop(done);
        }, 10000);
        jest.advanceTimersByTime(10000);
      });
    });


    xit('should call the props shapeDispensedHandler() from <InGame/>', () => {
      const shapeDispensedHandlerSpy = jest.spyOn(instance.props, 'shapeDispensedHandler');
      expect(shapeDispensedHandlerSpy).toBeCalled();
    });
  });
});
