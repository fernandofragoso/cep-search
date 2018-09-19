import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import { search } from './services/api';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logradouro: '',
      bairro: '',
      cep: '',
      localidade: '',
      uf: ''
    };
  }

  render() {
    return (
      <div className="App">
        <header className='App__header'>
          Consulta de Endereço
        </header>
        <main className='App__main'>
          <SearchBar onSearch={(cep) => this._searchCep(cep)} />
        </main>
      </div>
    );
  }

  async _searchCep(cepToSearch) {
    let { logradouro, bairro, cep, localidade, uf } = await search(cepToSearch);
    this.setState({
      logradouro,
      bairro,
      cep,
      localidade,
      uf
    });
  }
}

export default App;
