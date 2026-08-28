import React, { Component } from "react";
import Header from "./../header/HeaderSection";
import SectionTop from "./sectionTop";
import CardBox from "./cardBox";
import Highlight from "./highlight";

class Home extends Component {
  state = {
    links: ["Home", "Community", "Workshop", "Schedule"],
  };
  render() {
    const { links } = this.state;
    return (
      <div className="container">
        <Header links={links} />
        <main>
          <SectionTop />
          <CardBox />
          <Highlight />
        </main>
      </div>
    );
  }
}

export default Home;
