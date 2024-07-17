export function Post(props) {
  const { name, cb } = props;
  //и здесть выводится на страничку браузера! после трех этапов. App.js -> Posts.jsx -> Post.jsx
  return (
    <div>
      <h2 onClick={cb}>{name}</h2>
      <button>delete</button>
    </div>
  );
}
