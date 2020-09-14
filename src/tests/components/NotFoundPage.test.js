import React from 'react';
import toJSON from 'enzyme-to-json';
import NotFoundPage from '../../components/NotFoundPage';
import {shallow} from 'enzyme';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  
});
