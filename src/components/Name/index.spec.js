import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Name from './index';

describe('Name component', () => {
  it('should render', () => {
    const wrapper = shallow(<Name name="NAME" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  describe('if loading', () => {
    it('should render the loading state', () => {
      const wrapper = shallow(<Name name="NAME" loading={true} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('if className is provided', () => {
    it('should render the component with the class name', () => {
      const wrapper = shallow(<Name name="NAME" className="CLASSNAME" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    describe('if loading', () => {
      it('should render the class names in the correct order', () => {
        const wrapper = shallow(<Name name="NAME" className="CLASSNAME" loading={true} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
