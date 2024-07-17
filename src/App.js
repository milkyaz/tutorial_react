import { Posts } from "./components/Posts";
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

  handleSomething = () => {
    console.log("App.jsx setState update");
  };

  //Предыдущий коммент(//Вот этот state с тремя записями мы передаем в Posts). Передаём вот сюда вниз..
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
       <Posts posts={posts} cb={this.handleSomething} />
      </div>
    );
  }
}

export default App;
