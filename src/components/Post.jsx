export function Post(props) {
  //С помощью деструктуризации, которая ниже.. мы достаём id, name, onDelete.
  const { id, name, onDelete } = props;
  return (
    <h2>
      {name}
      {/* c помощью анонимной функции мы передаем при клике id */}
      <button onClick={() => onDelete(id)} id="my-btn">
        delete
      </button>
    </h2>
  );
}
