import React, { Component } from "react";
import Header from "./../header/HeaderSection";
import SectionTop from "./sectionTop";
import CardBox from "./cardBox";
import Highlight from "./highlight";
import InfoBlock from "./infoBlock";
import Footer from "../footer/footer";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <SectionTop />
          <CardBox />
          <Highlight />
          <InfoBlock />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
