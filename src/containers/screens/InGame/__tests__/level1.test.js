import React from 'react';
import { shallow } from 'enzyme';
import { LevelSelect } from './../../LevelSelect/LevelSelect';

describe('Level 1', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<LevelSelect/>)
    })

    it('should blah', () => {
        expect(true).toBeTruthy()
    })

    
})