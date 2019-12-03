import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Action from './index';

describe('Action component', () => {
  it('should render', () => {
    const wrapper = shallow(<Action label="Action" onClick={() => {}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  describe('if className is provided', () => {
    it('should render with the class name', () => {
      const wrapper = shallow(<Action label="Action" className="CLASSNAME" onClick={() => {}} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('when clicked', () => {
    it('should call the onClick handler', () => {
      const handler = jest.fn();
      const wrapper = shallow(<Action label="Action" onClick={handler} />);
      wrapper.find('button').simulate('click', { preventDefault: () => {} });
      expect(handler).toHaveBeenCalled();
    });
    describe('if disabled and clicked', () => {
      it('should NOT call the onClick handler', () => {
        const handler = jest.fn();
        const wrapper = shallow(<Action label="Action" onClick={handler} disabled />);
        wrapper.find('button').simulate('click', { preventDefault: () => {} });
        expect(handler).not.toHaveBeenCalled();
      });
    });
  });
});
