export function Post(props) {
  const { name } = props;
  return (
    <h2>
      {name}
      <button onClick={props.handle}>delete</button>
    </h2>
  );
}
