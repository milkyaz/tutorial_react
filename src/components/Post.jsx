export function Post(props) {
  const { name, cb } = props;
  return (
    <h2>
      {name}
      <button onClick={cb}>delete</button>
    </h2>
  );
}
