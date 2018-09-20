import React, { Component } from 'react';
import { MAPS_API_KEY } from '../services/config';
import './AddressViewer.css';

class AddressViewer extends Component {

  render() {
    return (
      <section className='AddressViewer'>
        <div className='AddressViewer__header'>
          <span className='AddressViewer__street'>{this.props.logradouro}</span>
          <button className='AddressViewer__close-button' onClick={() => this._close()}>✖</button>
        </div>
        <ul className='AddressViewer__info'>
          <li>{this.props.bairro}</li>
          <li>{this.props.cep}</li>
          <li>{this.props.localidade} - {this.props.uf}</li>
        </ul>
        <div className='AddressViewer__map'>
          <iframe 
            title="map"
            src={`https://www.google.com/maps/embed/v1/place?q=${this.props.cep}&key=${MAPS_API_KEY}`}>
          </iframe>
        </div>
      </section>
    );
  }

  _handleChange(event) {
    this.setState({
      cep: event.target.value
    });
  }

  _handleSearch() {
    this.props.onSearch(this.state.cep);
  }

  _close() {
    this.props.onClose();
  }
}

export default AddressViewer;
