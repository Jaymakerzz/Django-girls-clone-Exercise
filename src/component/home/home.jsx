import React, { Component } from "react";
import Header from "./../header/HeaderSection";

class Home extends Component {
  state = {
    links: ["Home", "Community", "Workshop", "Schedule"],
  };
  render() {
    const { links } = this.state;
    return (
      <div className="container">
        <Header links={links} />
      </div>
    );
  }
}

export default Home;
