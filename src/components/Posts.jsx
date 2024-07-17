import { Post } from "./Post";

export function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        //После App.js вызываем индивидуальный post 
        <Post key={post.id} name={post.name} cb={props.cb} />
      ))}
    </div>
  );
}
