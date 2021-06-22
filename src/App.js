import logo from './logo.svg';
import './App.css';
import { Component } from 'react'; //Auto import do react

class App extends Component {

  state = { //estado
    name: 'Thiago Lino',
    counter: 0
  };


  handlePClick = () => { // função que é chamada quando evento ocorre
    this.setState({ name: 'THIAGO LINO' }); // acesso a mudança feito através do setState
  }

  handleAClick = (event) => { // utilizar arrow function quando precisar utilizar o this para não precisar usar o .bind
    event.preventDefault(); //Tira evento padrão de um elemento e passa a ser executado o evento que eu descrever
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() { //função que renderiza elementos
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick /* Quando clicado executa a função que altera o estado */}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick /* Quando clicado executa a função que altera o estado */}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
