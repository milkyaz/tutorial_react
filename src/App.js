import React from "react";
import { Posts } from "./components/Posts";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}
