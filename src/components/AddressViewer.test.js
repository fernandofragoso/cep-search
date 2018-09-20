import React from 'react';
import { shallow } from 'enzyme';
import AddressViewer from './AddressViewer';

const mockClose = jest.fn();

const mockAddress = {
  logradouro: 'logradouro',
  cep: 'cep',
  bairro: 'bairro',
  localidade: 'localidade',
  uf: 'uf'
}

it('renders without crashing', () => {
  shallow(<AddressViewer onClose={mockClose} {...mockAddress} />);
});

it('renders the page elements', () => {
  const wrapper = shallow(<AddressViewer onClose={mockClose} {...mockAddress} />);
  expect(wrapper.find('.AddressViewer__header').length).toBe(1);
  expect(wrapper.find('.AddressViewer__info').length).toBe(1);
  expect(wrapper.find('.AddressViewer__map').length).toBe(1);
});

it('calls onClose on X click', () => {
  const wrapper = shallow(<AddressViewer onClose={mockClose} {...mockAddress} />);
  wrapper.find('.AddressViewer__close-button').simulate('click');
  expect(mockClose).toHaveBeenCalledTimes(1);
});
// it('enable button after filling form', () => {
//   const wrapper = shallow(<SearchBar onSearch={mockSearch} />);
//   wrapper.setState({ cep: '12345678' });
//   expect(wrapper.find('.SearchBar__button').props().disabled).toBeFalsy();
// });

// it('call onSearch and clear input after search', () => {
//   const wrapper = shallow(<SearchBar onSearch={mockSearch} />);
//   wrapper.setState({ cep: '12345678' });
//   wrapper.find('button').simulate('click');
//   expect(mockSearch).toHaveBeenCalledTimes(1);
//   expect(wrapper.state().cep).toBe('');
// })