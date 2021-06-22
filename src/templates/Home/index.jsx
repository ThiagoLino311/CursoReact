import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts'
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';

// Componente de classe
export class Home extends Component {
  //Estado
  state = {
    posts: [], //Array de posts que recebera os posts a serem exibidos na pagina
    allPosts: [], //Array de posts que recebera todos os posts na montagem da pagina
    page: 0, //"Numero da página"
    postsPerPage: 3 //Posts que apareceram na página por vez
  };

  //Componente de ciclo de vida que é executado assim que a página é montada
  async componentDidMount() { //função assíncrona retorna uma Promise
    await this.loadPosts(); //await pausa a execução da função assíncrona e espera pela resolução da Promise
  }

  //Função que é chamada para colocar os valores nos arrays
  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  //Função utilizada para acrescentar posts a serem renderizados
  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage })
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;// Utilizar as mudanças de estado
    const noMorePosts = page + postsPerPage >= allPosts.length;//desabilitar botão quando posts chegarem ao fim.

    return (
      <section className="container">
        <Posts posts={posts} />
        <div class="button-container">
          <Button text="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}