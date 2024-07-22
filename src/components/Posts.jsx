import { Post } from "./Post";
//В props также хранится функция onDelete, с помощью которого мы передали сюда
export function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post
          onDelete={props.onDelete}
          key={post.id}
          //с помощью нижней записи, мы достали id. Потому что она хранилась записью выше
          id={post.id}
          name={post.name}
        />
      ))}
    </div>
  );
}
