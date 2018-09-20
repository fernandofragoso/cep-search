import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

const mockSearch = jest.fn();

it('renders without crashing', () => {
  shallow(<SearchBar onSearch={mockSearch} />);
});

it('renders the page elements', () => {
  const wrapper = shallow(<SearchBar onSearch={mockSearch} />);
  expect(wrapper.find('.SearchBar__input').length).toBe(1);
  expect(wrapper.find('.SearchBar__button').props().disabled).toBeTruthy();
});

it('enable button after filling form', () => {
  const wrapper = shallow(<SearchBar onSearch={mockSearch} />);
  wrapper.setState({ cep: '12345678' });
  expect(wrapper.find('.SearchBar__button').props().disabled).toBeFalsy();
});

it('call onSearch and clear input after search', () => {
  const wrapper = shallow(<SearchBar onSearch={mockSearch} />);
  wrapper.setState({ cep: '12345678' });
  wrapper.find('button').simulate('click');
  expect(mockSearch).toHaveBeenCalledTimes(1);
  expect(wrapper.state().cep).toBe('');
})