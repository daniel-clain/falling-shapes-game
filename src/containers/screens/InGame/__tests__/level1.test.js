import React from 'react';
import { shallow } from 'enzyme';
import { LevelSelect } from './../LevelSelect.js';

describe('Level 1', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<LevelSelect/>)
    })

    it('should have a <GameTitle/>', () => {
        expect(wrapper.find('GameTitle')).toHaveLength(1);
    })

    
})