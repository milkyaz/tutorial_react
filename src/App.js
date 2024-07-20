import { Posts } from "./components/Posts";
import { useState, useEffect } from "react";
import React, { Component } from "react";

class App extends Component {
  //Вот этот state с тремя записями мы передаем в Posts
  state = {
    posts: [
      { id: "abc1", name: "JS Basics", year: 2020 },
      { id: "abc2", name: "JS Advanced" },
      { id: "abc3", name: "React JS" },
    ],
  };

  handleClick = () => {
    console.log('geg')
  };

  //Предыдущий коммент(//Вот этот state с тремя записями мы передаем в Posts). Передаём вот сюда вниз..
  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Posts  posts={posts} handle={this.handleClick} />
      </div>
    );
  }
}

export default App;
