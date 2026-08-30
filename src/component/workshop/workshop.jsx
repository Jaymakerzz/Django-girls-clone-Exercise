import React, { Component } from "react";
import ImageCard from "../reusable/imageCard";
import FancyHeading from "../reusable/fancyHeading";
import WorkshopCard from "../reusable/workshopCard";
import { getCard } from "./../../workshopeCard";
import InfoImageBlock from "../reusable/infoImageBlock";

class Workshop extends Component {
  state = {
    imgCard: {
      id: 1,
      task: "Workshops",
      heading: "Learn to Code with Confidence",
      message:
        "Join our free, beginner-friendly workshops and start building real web applications with guidance from supportive mentors",
    },
    Workshop: getCard(),
    side1: "left",
    side2: "right",
  };
  render() {
    const { imgCard, Workshop, side1, side2 } = this.state;

    return (
      <div>
        <ImageCard data={imgCard} />
        <FancyHeading />
        <WorkshopCard data={Workshop} />
        <div className="section__bar margin-top-big"></div>
        <h3 className="heading__secondary highlight__title margin-top-small-exta">
          What to Expect
        </h3>
        <InfoImageBlock side={side1} />
        <InfoImageBlock side={side2} />
        <InfoImageBlock side={side1} />
      </div>
    );
  }
}

export default Workshop;
