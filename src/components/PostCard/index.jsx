import './styles.css'

// Cards que contem o conteudo : foto, id, titulo e corpo
export const PostCard = ({ title, cover, body, id }) => (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{id} - {title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );