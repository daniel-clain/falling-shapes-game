import React from 'react';
import { shallow } from 'enzyme';
import { LevelSelect } from './../LevelSelect.js';

describe('LevelSelect', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<LevelSelect/>)
    })

    it('should have a <GameTitle/>', () => {
        expect(wrapper.find('GameTitle')).toHaveLength(1);
    })

    it('should have 6 level boxes', () => {
        expect(wrapper.find('LevelBox')).toHaveLength(6);
    })

    describe('levelBoxClicked()', () => {
        beforeAll(() => {
            wrapper = shallow(<LevelSelect/>)
            wrapper.find('LevelBox').first().props.onPress()
        })
        xit('should navigate to in game if unlocked', () => {
            
        })
    })
    
    xit('should not have any unlocked level after a level with not stars awarded', () => {

    })

    xit('should always have the 1st level unlocked', () => {
        
    })
})