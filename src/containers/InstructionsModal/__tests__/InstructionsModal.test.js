import React from 'react';
import { shallow } from 'enzyme';
import InstructionsModal from './../InstructionsModal';


describe('InstructionsModal', () => {
  let wrapper;
  const props = {
    instructions: ['test instructions'],
    startGameHandler: jest.fn(),
  };
  beforeAll(() => {
    wrapper = shallow(<InstructionsModal {...props} />);
  });

  xit('should have instructions', () => {
    expect(true).toBeTruthy();
  });
  it('should have a button with text: start game', () => {
    expect(wrapper.find('TouchableHighlight').contains('Start Game')).toEqual(true);
  });
  xit('should have a translucent background', () => {
    expect(true).toBeTruthy();
  });
  describe('the start game button', () => {
    it('should call the start game function when clicked', () => {
      wrapper.find('TouchableHighlight').props().onPress();
      expect(props.startGameHandler).toHaveBeenCalledTimes(1);
    });
  });
});
