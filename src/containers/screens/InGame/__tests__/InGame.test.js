import React from 'react';
import { shallow } from 'enzyme';
import { InGame } from '../InGame.js';

describe('Level 1', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<InGame/>)
    })

    it('should have a <ShapeDispenser/>', () => {
        expect(wrapper.find('ShapeDispenser')).toHaveLength(1);
    })
    it('should have a <ShapeCollector/>', () => {
        expect(wrapper.find('ShapeCollector')).toHaveLength(1);
    })
    it('should have a <LaneArea/>', () => {
        expect(wrapper.find('ShapeCollector')).toHaveLength(1);
    })
    it('should have a <StatsBar/>', () => {
        expect(wrapper.find('StatsBar')).toHaveLength(1);
    })
    it('should have a <InstructionsModal/>', () => {
        expect(wrapper.find('InstructionsModal')).toHaveLength(1);
    })
    it('should have a <LaneArea/>', () => {
        expect(wrapper.find('ShapeCollector')).toHaveLength(1);
    })
    it('should have a <LaneArea/>', () => {
        expect(wrapper.find('ShapeCollector')).toHaveLength(1);
    })
    it('should have a <LaneArea/>', () => {
        expect(wrapper.find('ShapeCollector')).toHaveLength(1);
    })

    
})