import React from 'react';
import { shallow } from 'enzyme';
import { LaneArea } from './../LaneArea.js';

describe('<LaneArea/>', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<LaneArea/>)
    })
    it('should have 3 <Lane/>s', () => {
        expect(wrapper.find('Lane')).toHaveLength(3);
    })

    
})