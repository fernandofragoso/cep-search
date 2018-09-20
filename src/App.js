import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import { search } from './services/api';
import './App.css';
import AddressViewer from './components/AddressViewer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: null,
      error: null,
      isLoading: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className='App__header'>
          <h3>Consulta de Endereço</h3>
        </header>
        <main className='App__main'>
          <SearchBar onSearch={(cep) => this._searchCep(cep)} />
          {this.state.address &&
            <AddressViewer onClose={() => this._clearAddress()} {...this.state.address} />
          }
          {this.state.error &&
            <div className='App__error'>CEP não encontrado.</div>
          }
        </main>
      </div>
    );
  }

  async _searchCep(cepToSearch) {
    this._setLoading(true);
    let { erro, logradouro, bairro, cep, localidade, uf } = await search(cepToSearch);
    
    if (erro) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        address: {
          logradouro,
          bairro,
          cep,
          localidade,
          uf
        },
        error: false
      });
    }

   
    this._setLoading(false);
  }

  _setLoading(bool) {
    this.setState({
      isLoading: bool
    });
  }

  _clearAddress() {
    this.setState({
      address: null,
      error: false
    });
  }
}

export default App;
