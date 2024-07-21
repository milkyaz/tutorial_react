import { Posts } from "./components/Posts";
import { Gallery } from "./components/Gallery";
import React, { Component } from "react";

class App extends Component {
  //Вот этот state с тремя записями мы передаем в Posts
  state = {
    posts: [
      { id: "my-bsc", name: "JS Basics" },
      { id: "my-adv", name: "JS Advanced" },
      { id: "my-rct", name: "React JS" },
    ],
  };
  deleteElem = () => {
    const posts = this.state.posts;
    if (posts.length > 0) {
      const lastIndex = posts.length - 1;
      this.setState({
        posts: posts.filter((posts, index) => index !== lastIndex),
      });
    }
    console.log(posts);
  };

  //Предыдущий коммент(//Вот этот state с тремя записями мы передаем в Posts). Передаём вот сюда вниз..
  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Gallery />
        <Posts posts={posts} onDelete={this.deleteElem} />
      </div>
    );
  }
}

export default App;
