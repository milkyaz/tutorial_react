import { Posts } from "./components/Posts";
import { useState } from "react";
import React, { Component } from "react";

class App extends Component {
  //Вот этот state с тремя записями мы передаем в Posts
  state = {
    posts: [
      { id: "abc1", name: "JS Basics" },
      { id: "abc2", name: "JS Advanced" },
      { id: "abc3", name: "React JS" },
    ],
  };

  removePost = () => {
    
  };

  //Предыдущий коммент(//Вот этот state с тремя записями мы передаем в Posts). Передаём вот сюда вниз..
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <Posts posts={posts} cb={this.removePost} />
      </div>
    );
  }
}

export default App;
