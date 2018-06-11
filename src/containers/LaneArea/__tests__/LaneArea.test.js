import React from 'react';
import { shallow } from 'enzyme';
import LaneArea from './../LaneArea';
// import Shape from './../../../components/Shape';

describe('<LaneArea/>', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<LaneArea
      inGameReference={() => { }}
      shapePassingThroughCollectionZoneHandler={jest.fn()}
    />);
  });
  it('should have 3 <Lane/>s', () => {
    expect(wrapper.find('Lane')).toHaveLength(3);
  });
  describe('newShapeDispensedInLane()', () => {
    let instance;
    beforeAll(() => {
      instance = wrapper.instance();
    });
    xit('should call the shapeEnterLane() in the appropriate <Lane/> Component', () => {
      console('instance.laneRefArray[0]: ', instance.laneRefArray[0]);
      /* const shapeEnterLaneSpy = jest.spyOn(instance.laneRefArray[0], 'shapeEnterLane');
      instance.shapeEnterLane();
      expect(shapeEnterLaneSpy).toBeCalledWith(<Shape />); */
    });
  });
});
