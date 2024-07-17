export function Post(props) {
  const { name, cb } = props;
//и здесть выводится на страничку браузера! после трех этапов. App.js -> Posts.jsx -> Post.jsx
  return (
    <h2>
      {name}
      <button onClick={cb}>delete</button>
    </h2>
  );
}
