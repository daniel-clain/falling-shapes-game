import React from 'react';
import { shallow } from 'enzyme';
import { InstructionsModal } from '../InstructionsModal.js';

describe('InstructionsModal', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<InstructionsModal/>)
    })

    xit('should have instructions', () => {
        expect(true).toBeTruthy();
    })
    it('should have a button with text: start game', () => {
        expect(wrapper.find('TouchableHighlight').contains('Start Game')).toEqual(true);
    })
    xit('should have a translucent background', () => {
        expect(true).toBeTruthy();
    })
})