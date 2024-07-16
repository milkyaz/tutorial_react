import { Posts } from "./components/Posts";
import React, { Component } from "react";

class App extends Component {
  state = {
    posts: [
      { id: "abc1", name: "JS Basics" },
      { id: "abc2", name: "JS Advanced" },
      { id: "abc3", name: "React JS" },
    ],
  };
  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
