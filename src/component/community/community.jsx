import React, { Component } from "react";
import ImageCard from "./../reusable/imageCard";
import FancyHeading from "../reusable/fancyHeading";
import InfoImageBlock from "../reusable/infoImageBlock";

class Community extends Component {
  state = {
    imgCard: {
      id: 2,
      task: "Chapters",
      heading: "Our Community",
      message:
        "Join the Django Girls Tanzania community and Make a Difference.",
    },
    side1: "left",
    side2: "right",
  };
  render() {
    const { imgCard, side1, side2 } = this.state;
    return (
      <div>
        <ImageCard data={imgCard} />
        <FancyHeading />
        <InfoImageBlock side={side1} />
        <InfoImageBlock side={side2} />
        <InfoImageBlock side={side1} />
      </div>
    );
  }
}

export default Community;
