export function Post(props) {
  const { name } = props;
  return (
    <h2>
      {name}
      <button onClick={props.onDelete} id="my-btn">
        delete
      </button>
    </h2>
  );
}
