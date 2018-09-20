import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './components/SearchBar';
import AddressViewer from './components/AddressViewer';
import App from './App';

const addressMock = {
  logradouro: 'logradouro',
  cep: 'cep',
  bairro: 'bairro',
  localidade: 'localidade',
  uf: 'uf'
}

it('renders without crashing', () => {
  shallow(<App/>);
});

it('renders the page elements', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(SearchBar).length).toBe(1);
  expect(wrapper.find(AddressViewer).length).toBe(0);
});

it('renders the address', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ address: addressMock });
  expect(wrapper.find(AddressViewer).length).toBe(1);
});

it('renders the error', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ error: true });
  expect(wrapper.find('.App__error').length).toBe(1);
});