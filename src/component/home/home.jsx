import React, { Component } from "react";

import SectionTop from "./sectionTop";
import CardBox from "./cardBox";
import Highlight from "./highlight";
import InfoBlock from "./infoBlock";

class Home extends Component {
  render() {
    return (
      <main>
        <SectionTop />
        <CardBox />
        <Highlight />
        <InfoBlock />
      </main>
    );
  }
}

export default Home;
