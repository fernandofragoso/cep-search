import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cep: ''
    };
  }

  render() {
    return (
      <section className='SearchBar'>
        <h3 className='SearchBar__title'>Consultar</h3>
        <div className='SearchBar__input'>
          <label>CEP</label>
          <input 
            type='text'
            maxLength='8'
            pattern="[0-9]*"
            placeholder='Digite o CEP'
            value={this.state.cep}
            onChange={(event) => this._handleChange(event)}
            onKeyPress={(event) => (event.key === 'Enter' && this.state.cep) ? this._handleSearch() : null}/>
          <button onClick={() => this._handleSearch()} disabled={!this._isValid()}>Buscar</button>
        </div>
      </section>
    );
  }

  _handleChange(event) {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({
        cep: event.target.value
      });
    }
  }

  _handleSearch() {
    this.props.onSearch(this.state.cep);
    this._clearSearch();
  }

  _clearSearch() {
    this.setState({
      cep: ''
    });
  }

  _isValid() {
    return (this.state.cep.length===8);
  }
}

export default SearchBar;
