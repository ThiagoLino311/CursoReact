import { Component } from 'react';
import './App.css';

class App extends Component {
  state = { //estado com array e objetos
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => ( //.map cria um array que copia os elementos do array original
          <div key={post.id /* key: identificação do elemento para otimizar a renderização */ }>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App
