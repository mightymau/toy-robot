import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("Toy Simulator Testing", () => {
  let wrapper;
  let form;
  beforeEach(()=> {
    wrapper = mount(<App />);
    form = wrapper.find('form').first();
  })
  test("Sample Commands 2", () => {
    wrapper.find("#sample-2-btn").simulate("click");
    form.simulate('submit');

    expect(wrapper.find("h2").text()).toBe("Output: 1,0,NORTH")
  });
  test("Sample Commands 3", () => {
    wrapper.find("#sample-3-btn").simulate("click");
    form.simulate('submit');

    expect(wrapper.find("h2").text()).toBe("Output: 0,1,EAST")
  });
});