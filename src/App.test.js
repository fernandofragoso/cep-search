import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './components/SearchBar';
import AddressViewer from './components/AddressViewer';
import App from './App';

it('renders without crashing', () => {
  shallow(<App/>);
});

it('renders the page elements', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(SearchBar).length).toBe(1);
  expect(wrapper.find(AddressViewer).length).toBe(0);
});