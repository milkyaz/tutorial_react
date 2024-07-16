import { Posts } from "./components/Posts";
import { useState } from "react";
import React, { Component } from "react";

class App extends Component {
  state = {
    posts: [
      { id: "abc1", name: "JS Basics" },
      { id: "abc2", name: "JS Advanced" },
      { id: "abc3", name: "React JS" },
    ],
  };

  removePost = () => {
    
  };

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
