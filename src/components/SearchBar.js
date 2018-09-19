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
        <h3>Consultar</h3>
        <label>CEP</label>
        <input 
          type='text' 
          placeholder='Digite o CEP' 
          value={this.state.cep}
          onChange={(event) => this._handleChange(event)}
          onKeyPress={(event) => (event.key === 'Enter' && this.state.cep) ? this._handleSearch() : null}/>
        <button onClick={() => this._handleSearch()}>Buscar</button>
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
}

export default SearchBar;
